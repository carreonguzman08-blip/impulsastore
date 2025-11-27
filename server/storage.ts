import {
  users,
  contactSubmissions,
  adminUsers,
  pageViews,
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type AdminUser,
  type InsertAdminUser,
  type PageView,
  type InsertPageView,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, gte, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getAdminUser(username: string, password: string): Promise<AdminUser | undefined>;
  createPageView(pageView: InsertPageView): Promise<PageView>;
  getPageViewStats(period: string): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contactSubmission] = await db
      .insert(contactSubmissions)
      .values({
        ...submission,
        phone: submission.phone || null,
      })
      .returning();
    return contactSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async getAdminUser(username: string, password: string): Promise<AdminUser | undefined> {
    const [admin] = await db
      .select()
      .from(adminUsers)
      .where(and(eq(adminUsers.username, username), eq(adminUsers.password, password)));
    return admin || undefined;
  }

  async createPageView(pageViewData: InsertPageView): Promise<PageView> {
    const [pageView] = await db
      .insert(pageViews)
      .values(pageViewData)
      .returning();
    return pageView;
  }

  async getPageViewStats(period: string): Promise<any> {
    const now = new Date();
    let dateFilter: Date;

    switch (period) {
      case 'today':
        dateFilter = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case 'week':
        dateFilter = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        dateFilter = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'year':
        dateFilter = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        // All time
        const totalViews = await db
          .select({ count: sql<number>`count(*)` })
          .from(pageViews);
        
        const pageBreakdown = await db
          .select({ 
            page: pageViews.page, 
            count: sql<number>`count(*)` 
          })
          .from(pageViews)
          .groupBy(pageViews.page);

        const trafficSources = await db
          .select({ 
            source: pageViews.trafficSource, 
            count: sql<number>`count(*)` 
          })
          .from(pageViews)
          .where(sql`${pageViews.trafficSource} IS NOT NULL`)
          .groupBy(pageViews.trafficSource)
          .orderBy(sql`count(*) DESC`);

        return {
          totalViews: totalViews[0]?.count || 0,
          pageBreakdown: pageBreakdown || [],
          trafficSources: trafficSources || [],
          period: 'all'
        };
    }

    const totalViews = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageViews)
      .where(gte(pageViews.createdAt, dateFilter));

    const pageBreakdown = await db
      .select({ 
        page: pageViews.page, 
        count: sql<number>`count(*)` 
      })
      .from(pageViews)
      .where(gte(pageViews.createdAt, dateFilter))
      .groupBy(pageViews.page);

    const trafficSources = await db
      .select({ 
        source: pageViews.trafficSource, 
        count: sql<number>`count(*)` 
      })
      .from(pageViews)
      .where(and(
        gte(pageViews.createdAt, dateFilter),
        sql`${pageViews.trafficSource} IS NOT NULL`
      ))
      .groupBy(pageViews.trafficSource)
      .orderBy(sql`count(*) DESC`);

    return {
      totalViews: totalViews[0]?.count || 0,
      pageBreakdown: pageBreakdown || [],
      trafficSources: trafficSources || [],
      period
    };
  }
}

export const storage = new DatabaseStorage();
