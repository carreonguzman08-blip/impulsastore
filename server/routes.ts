import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertPageViewSchema } from "@shared/schema";
import crypto from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log the submission
      console.log("New contact submission:", submission);
      
      res.json({ 
        success: true, 
        message: "Mensaje enviado correctamente",
        id: submission.id 
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      res.status(400).json({ 
        success: false, 
        message: "Error al procesar el mensaje" 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener mensajes" 
      });
    }
  });

  // Admin authentication endpoint
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ 
          success: false, 
          message: "Usuario y contraseña requeridos" 
        });
      }

      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
      const admin = await storage.getAdminUser(username, hashedPassword);
      
      if (admin) {
        // Simple token generation (in production, use JWT)
        const token = crypto.randomBytes(32).toString('hex');
        res.json({ 
          success: true, 
          token,
          message: "Login exitoso" 
        });
      } else {
        res.status(401).json({ 
          success: false, 
          message: "Usuario o contraseña incorrectos" 
        });
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error del servidor" 
      });
    }
  });

  // Track page views endpoint
  app.post("/api/page-view", async (req, res) => {
    try {
      const { page, trafficSource, utmSource, utmMedium, utmCampaign } = req.body;
      const userAgent = req.get('User-Agent') || '';
      const ipAddress = req.ip || req.connection.remoteAddress || '';
      const referrer = req.get('Referrer') || '';

      const pageViewData = {
        page,
        userAgent,
        ipAddress,
        referrer,
        trafficSource: trafficSource || null,
        utmSource: utmSource || null,
        utmMedium: utmMedium || null,
        utmCampaign: utmCampaign || null
      };

      const validatedData = insertPageViewSchema.parse(pageViewData);
      await storage.createPageView(validatedData);
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking page view:", error);
      res.status(500).json({ success: false });
    }
  });

  // Get page view statistics
  app.get("/api/page-views", async (req, res) => {
    try {
      const { period = 'all' } = req.query;
      const stats = await storage.getPageViewStats(period as string);
      res.json(stats);
    } catch (error) {
      console.error("Error fetching page view stats:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener estadísticas" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
