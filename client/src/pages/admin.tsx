import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  RefreshCw, 
  Mail, 
  Phone,
  Clock,
  User,
  Eye,
  BarChart3,
  LogOut,
  Globe
} from "lucide-react";
import AdminLogin from "@/components/admin-login";
import { ContactSubmission } from "@shared/schema";
import { queryClient } from "@/lib/queryClient";

interface AdminStats {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
}

interface PageViewStats {
  totalViews: number;
  pageBreakdown: { page: string; count: number }[];
  trafficSources: { source: string; count: number }[];
  period: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [viewsPeriod, setViewsPeriod] = useState('all');

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    setIsAuthenticated(!!token);
  }, []);

  // Fetch contact submissions
  const { data: submissions = [], isLoading: submissionsLoading, error, refetch } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
    enabled: isAuthenticated,
  });

  // Fetch page view statistics
  const { data: pageViewStats, isLoading: viewsLoading, refetch: refetchViews } = useQuery<PageViewStats>({
    queryKey: ["/api/page-views", viewsPeriod],
    queryFn: async () => {
      const response = await fetch(`/api/page-views?period=${viewsPeriod}`);
      return response.json();
    },
    enabled: isAuthenticated,
  });

  // Calculate contact form stats
  const stats: AdminStats = {
    total: submissions.length,
    today: submissions.filter(sub => {
      const today = new Date().toDateString();
      return new Date(sub.createdAt).toDateString() === today;
    }).length,
    thisWeek: submissions.filter(sub => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(sub.createdAt) >= weekAgo;
    }).length,
    thisMonth: submissions.filter(sub => {
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return new Date(sub.createdAt) >= monthAgo;
    }).length
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  const handleRefresh = () => {
    refetch();
    refetchViews();
  };

  const getPeriodLabel = (period: string) => {
    switch(period) {
      case 'today': return 'Hoy';
      case 'week': return 'Esta Semana';
      case 'month': return 'Este Mes';
      case 'year': return 'Este Año';
      default: return 'Todo el Tiempo';
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Mobile Optimized */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Panel Admin</h1>
              <p className="text-sm text-gray-600">Impulso 360°</p>
            </div>
            <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-4">
              <Button
                onClick={handleRefresh}
                variant="outline"
                size="sm"
                disabled={submissionsLoading || viewsLoading}
                className="text-xs sm:text-sm"
              >
                <RefreshCw className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 ${submissionsLoading || viewsLoading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Actualizar</span>
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-700 text-xs sm:text-sm"
              >
                <LogOut className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Cerrar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-6 pb-8 px-3 sm:pt-8 sm:pb-12 sm:px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Views Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center justify-center sm:justify-start">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Visitantes
              </h2>
              <div className="flex flex-wrap justify-center sm:justify-end gap-1 sm:gap-2">
                {['today', 'week', 'month', 'year', 'all'].map((period) => (
                  <Button
                    key={period}
                    onClick={() => setViewsPeriod(period)}
                    variant={viewsPeriod === period ? "default" : "outline"}
                    size="sm"
                    className="text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-2"
                  >
                    {getPeriodLabel(period)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Page Views Stats - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                      {viewsLoading ? '...' : pageViewStats?.totalViews || 0}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">Total - {getPeriodLabel(viewsPeriod)}</p>
                  </div>
                </div>
              </div>

              {pageViewStats?.pageBreakdown?.slice(0, 3).map((page, index) => (
                <div key={page.page} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center">
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">{page.count}</p>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">{page.page || 'Inicio'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section - Mobile Optimized */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Page Breakdown Chart - Mobile Optimized */}
              {pageViewStats?.pageBreakdown && pageViewStats.pageBreakdown.length > 0 && (
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                    <span className="truncate">Páginas - {getPeriodLabel(viewsPeriod)}</span>
                  </h3>
                  <div className="space-y-3">
                    {pageViewStats.pageBreakdown.map((page) => (
                      <div key={page.page} className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 truncate flex-1 mr-2">
                          {page.page || 'Inicio'}
                        </span>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <div className="w-16 sm:w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ 
                                width: `${(page.count / pageViewStats.totalViews) * 100}%` 
                              }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-gray-900 w-6 sm:w-8 text-right">
                            {page.count}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Traffic Sources Chart - Mobile Optimized */}
              {pageViewStats?.trafficSources && pageViewStats.trafficSources.length > 0 && (
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                    <span className="truncate">Origen - {getPeriodLabel(viewsPeriod)}</span>
                  </h3>
                  <div className="space-y-3">
                    {pageViewStats.trafficSources.map((source) => (
                      <div key={source.source} className="flex items-center justify-between">
                        <div className="flex items-center min-w-0 flex-1 mr-2">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 sm:mr-2 flex-shrink-0 ${
                            source.source.includes('Facebook') ? 'bg-blue-600' :
                            source.source.includes('Instagram') ? 'bg-pink-500' :
                            source.source.includes('TikTok') ? 'bg-black' :
                            source.source.includes('Google') ? 'bg-green-500' :
                            source.source.includes('WhatsApp') ? 'bg-green-600' :
                            source.source.includes('Direct') ? 'bg-gray-500' :
                            source.source.includes('Twitter') || source.source.includes('X') ? 'bg-blue-400' :
                            source.source.includes('LinkedIn') ? 'bg-blue-700' :
                            source.source.includes('YouTube') ? 'bg-red-600' :
                            source.source.includes('UTM') ? 'bg-purple-500' :
                            'bg-teal-600'
                          }`} />
                          <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">
                            {source.source}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                          <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-indigo-500 h-2 rounded-full" 
                              style={{ 
                                width: `${(source.count / pageViewStats.totalViews) * 100}%` 
                              }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-gray-900 w-4 sm:w-6 text-right">
                            {source.count}
                          </span>
                          <span className="text-xs text-gray-500 w-6 sm:w-8 text-right">
                            {Math.round((source.count / pageViewStats.totalViews) * 100)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Enhanced Analytics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center sm:justify-start">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
              Análisis Detallado de Visitantes
            </h2>

            {/* Visitors Timeline Chart */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Gráfico de Visitantes</h3>
                    <p className="text-sm text-green-600 font-medium">
                      Distribución por páginas - {viewsPeriod === 'today' ? 'Hoy' : viewsPeriod === 'week' ? 'Esta Semana' : viewsPeriod === 'month' ? 'Este Mes' : viewsPeriod === 'year' ? 'Este Año' : 'Histórico'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-green-600">
                    {pageViewStats?.totalViews || 0}
                  </div>
                  <p className="text-sm text-gray-600">visitas totales</p>
                </div>
              </div>
              
              {/* Enhanced Bar Chart */}
              <div className="mt-4">
                <div className="flex items-end space-x-2 h-32 bg-white/50 rounded-lg p-4">
                  {pageViewStats?.pageBreakdown?.slice(0, 8).map((page, index) => {
                    const maxViews = Math.max(...(pageViewStats?.pageBreakdown?.map(p => p.count) || [1]));
                    const height = Math.max(10, (page.count / maxViews) * 100);
                    
                    const getPageColor = (pageName: string, index: number) => {
                      const colors = [
                        'from-blue-500 to-blue-600',
                        'from-green-500 to-green-600', 
                        'from-purple-500 to-purple-600',
                        'from-orange-500 to-orange-600',
                        'from-red-500 to-red-600',
                        'from-indigo-500 to-indigo-600',
                        'from-pink-500 to-pink-600',
                        'from-yellow-500 to-yellow-600'
                      ];
                      return colors[index % colors.length];
                    };

                    const getPageShortName = (pageName: string) => {
                      switch(pageName.toLowerCase()) {
                        case '/': return 'Inicio';
                        case '/sitios-web': return 'Web';
                        case '/marketing': return 'Marketing';
                        case '/software': return 'Software';
                        case '/automatizacion': return 'IA';
                        case '/contact': return 'Contacto';
                        default: return pageName.replace('/', '').slice(0, 8) || 'Página';
                      }
                    };

                    return (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className={`w-full bg-gradient-to-t ${getPageColor(page.page, index)} rounded-t-lg transition-all hover:scale-105 cursor-pointer shadow-lg`}
                          style={{ height: `${height}px` }}
                          title={`${getPageShortName(page.page)}: ${page.count} visitas (${((page.count / (pageViewStats?.totalViews || 1)) * 100).toFixed(1)}%)`}
                        >
                          <div className="w-full h-full flex items-end justify-center pb-2">
                            <span className="text-white text-xs font-bold">{page.count}</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-2 text-center font-medium">
                          {getPageShortName(page.page)}
                        </div>
                      </div>
                    );
                  }) || (
                    <div className="w-full text-center text-gray-500 py-8">
                      <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No hay suficientes datos para mostrar la gráfica</p>
                      <p className="text-xs text-gray-400">Los datos aparecerán cuando lleguen más visitantes</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Advanced Traffic Sources Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enhanced Traffic Sources Breakdown */}
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Fuentes Detalladas</h3>
                    <p className="text-sm text-gray-500">Canal de adquisición de usuarios</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {pageViewStats?.trafficSources?.map((source, index) => {
                    const percentage = ((source.count / (pageViewStats?.totalViews || 1)) * 100);
                    
                    const getSourceData = (sourceName: string) => {
                      const name = sourceName.toLowerCase();
                      if (name.includes('facebook')) return { icon: '📘', color: 'from-blue-600 to-blue-700', name: 'Facebook' };
                      if (name.includes('instagram')) return { icon: '📷', color: 'from-pink-500 to-purple-600', name: 'Instagram' };
                      if (name.includes('whatsapp')) return { icon: '💚', color: 'from-green-500 to-green-600', name: 'WhatsApp' };
                      if (name.includes('google')) return { icon: '🔍', color: 'from-red-500 to-yellow-500', name: 'Google' };
                      if (name.includes('tiktok')) return { icon: '🎵', color: 'from-black to-gray-800', name: 'TikTok' };
                      if (name.includes('youtube')) return { icon: '📺', color: 'from-red-600 to-red-700', name: 'YouTube' };
                      if (name.includes('linkedin')) return { icon: '💼', color: 'from-blue-700 to-blue-800', name: 'LinkedIn' };
                      if (name.includes('direct') || name.includes('directo')) return { icon: '🌐', color: 'from-gray-500 to-gray-600', name: 'Directo' };
                      return { icon: '🔗', color: 'from-indigo-500 to-purple-600', name: sourceName };
                    };

                    const sourceData = getSourceData(source.source);

                    return (
                      <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200">
                        <div className="flex items-center flex-1">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm border">
                            <span className="text-2xl">{sourceData.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-gray-900">{sourceData.name}</span>
                              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                                {percentage.toFixed(1)}%
                              </span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${sourceData.color} transition-all duration-700`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-xs text-gray-500">Visitas</span>
                              <span className="text-sm font-bold text-gray-900">{source.count}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }) || (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">📊</div>
                      <p className="text-gray-500 font-medium">No hay datos de fuentes disponibles</p>
                      <p className="text-xs text-gray-400 mt-1">Los datos aparecerán cuando lleguen visitantes desde diferentes fuentes</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Análisis de Rendimiento</h3>
                    <p className="text-sm text-gray-500">Métricas clave del sitio web</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {pageViewStats?.pageBreakdown?.length || 0}
                    </div>
                    <div className="text-xs text-blue-700 font-medium">Páginas Activas</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {pageViewStats?.trafficSources?.length || 0}
                    </div>
                    <div className="text-xs text-green-700 font-medium">Fuentes de Tráfico</div>
                  </div>
                </div>

                {/* Top Performing Pages */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Top 5 Páginas</h4>
                  {pageViewStats?.pageBreakdown?.slice(0, 5).map((page, index) => {
                    const getPageInfo = (pageName: string) => {
                      switch(pageName.toLowerCase()) {
                        case '/': return { name: 'Página Principal', icon: '🏠', color: 'text-blue-600' };
                        case '/sitios-web': return { name: 'Sitios Web', icon: '💻', color: 'text-green-600' };
                        case '/marketing': return { name: 'Marketing', icon: '📈', color: 'text-purple-600' };
                        case '/software': return { name: 'Software', icon: '⚙️', color: 'text-teal-700' };
                        case '/automatizacion': return { name: 'Automatización IA', icon: '🤖', color: 'text-red-600' };
                        case '/contact': return { name: 'Contacto', icon: '📞', color: 'text-indigo-600' };
                        default: return { name: pageName.replace('/', '') || 'Página', icon: '📄', color: 'text-gray-600' };
                      }
                    };

                    const pageInfo = getPageInfo(page.page);
                    const isTop = index < 3;

                    return (
                      <div key={index} className={`flex items-center p-3 rounded-lg transition-colors ${isTop ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}>
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full mr-3 shadow-sm">
                          <span className="text-lg">{pageInfo.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${pageInfo.color}`}>{pageInfo.name}</span>
                            {isTop && <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Top</span>}
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex-1 mr-3">
                              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full transition-all duration-700 ${isTop ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'}`}
                                  style={{ width: `${(page.count / Math.max(...(pageViewStats?.pageBreakdown?.map(p => p.count) || [1]))) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            <span className="text-sm font-bold text-gray-900">{page.count}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }) || (
                    <div className="text-center py-6">
                      <div className="text-3xl mb-2">📊</div>
                      <p className="text-gray-500 text-sm">No hay datos de rendimiento</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Forms Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center sm:justify-start">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Contactos
            </h2>

            {/* Contact Stats Grid - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6">
              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{stats.total}</p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">Total</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{stats.today}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Hoy</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{stats.thisWeek}</p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">Semana</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">{stats.thisMonth}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Mes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Submissions Table */}
            {submissionsLoading ? (
              <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <RefreshCw className="h-8 w-8 text-gray-400 animate-spin mx-auto mb-4" />
                <p className="text-gray-500">Cargando mensajes...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-600">Error al cargar los mensajes</p>
              </div>
            ) : submissions.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No hay mensajes aún</p>
              </div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden lg:block bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cliente
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contacto
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mensaje
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fecha
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {submissions.map((submission) => (
                          <tr key={submission.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <User className="h-8 w-8 text-gray-400" />
                                </div>
                                <div className="ml-3">
                                  <div className="text-sm font-medium text-gray-900">
                                    {submission.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    ID: {submission.id}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                <div className="flex items-center text-sm text-gray-900">
                                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                  {submission.email}
                                </div>
                                {submission.phone && (
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                    {submission.phone}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900 max-w-xs">
                                <p className="truncate">{submission.message}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(submission.createdAt.toString())}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setSelectedSubmission(submission)}
                                >
                                  Ver Detalles
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => window.open(`https://wa.me/${submission.phone?.replace(/[^0-9]/g, '')}`, '_blank')}
                                >
                                  WhatsApp
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-4">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="bg-white rounded-lg shadow-sm border p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <User className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" />
                          <div className="min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {submission.name}
                            </h3>
                            <p className="text-xs text-gray-500">ID: {submission.id}</p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 text-right">
                          {formatDate(submission.createdAt.toString())}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center">
                          <Mail className="h-3 w-3 mr-2 text-gray-400 flex-shrink-0" />
                          <span className="text-xs text-gray-900 truncate">{submission.email}</span>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center">
                            <Phone className="h-3 w-3 mr-2 text-gray-400 flex-shrink-0" />
                            <span className="text-xs text-gray-500">{submission.phone}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {submission.message.length > 100 
                            ? `${submission.message.substring(0, 100)}...` 
                            : submission.message}
                        </p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedSubmission(submission)}
                          className="flex-1 text-xs"
                        >
                          Ver Detalles
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`https://wa.me/${submission.phone?.replace(/[^0-9]/g, '')}`, '_blank')}
                          className="flex-1 text-xs bg-green-50 hover:bg-green-100 text-green-700"
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Modal for submission details */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Detalles del Formulario
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nombre:</label>
                  <p className="text-gray-900">{selectedSubmission.name}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Email:</label>
                  <p className="text-gray-900">{selectedSubmission.email}</p>
                </div>
                
                {selectedSubmission.phone && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">WhatsApp:</label>
                    <p className="text-gray-900">{selectedSubmission.phone}</p>
                  </div>
                )}
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Fecha:</label>
                  <p className="text-gray-900">{formatDate(selectedSubmission.createdAt.toString())}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Mensaje:</label>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md">
                    <p className="text-gray-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedSubmission(null)}
                >
                  Cerrar
                </Button>
                <Button
                  onClick={() => {
                    window.open(`https://wa.me/${selectedSubmission.phone?.replace(/[^0-9]/g, '')}`, '_blank');
                    setSelectedSubmission(null);
                  }}
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}