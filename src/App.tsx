import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Orders from "./pages/admin/Orders.jsx";
import Clients from "./pages/admin/Clients.jsx";
import FileManager from "./pages/admin/FileManager.jsx";
import GalleryManager from "./pages/admin/GalleryManager.jsx";
import Settings from "./pages/admin/Settings.jsx";

import DesignsSection from "./components/DesignsSection";
import Gallery from "./pages/Gallery";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import OTPVerify from "./pages/OTPVerify";
import AdminDashboard from "./pages/AdminDashboard";

import Quote from "./pages/Quote";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/verify" element={<OTPVerify />} />
          <Route path="/designs" element={<DesignsSection />} />
          <Route path="/gallery/:category" element={<Gallery />} />
          <Route path="/quote" element={<Quote />} />
          <Route
            path="/admin-sangam@9822"
            element={
              
                <AdminLayout />
             
            }
          />
            {/* ADMIN ROUTES */}
            <Route path="/admin-sangam@9822" element={<AdminLayout />}>

              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="clients" element={<Clients />} />
              <Route path="file-manager" element={<FileManager />} />
              <Route path="gallery-manager" element={<GalleryManager />} />
              <Route path="settings" element={<Settings />} />

            </Route>


            <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;