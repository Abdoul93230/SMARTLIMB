import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Research from './pages/Research';
import Careers from './pages/Careers';
import Team from './pages/Team';
import Blog from './pages/Blog';
import JobDetails from './pages/JobDetails';
import BlogPost from './pages/BlogPost';
import ProductDetails from './pages/ProductDetails';
import AdminLayout from './admin/layouts/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminProducts from './admin/pages/AdminProducts';
import AdminBlog from './admin/pages/AdminBlog';
import AdminCareers from './admin/pages/AdminCareers';
import AdminTeam from './admin/pages/AdminTeam';
import AdminSettings from './admin/pages/AdminSettings';
import Footer from './components/Footer';
import { AdminProvider } from './contexts/AdminContext';

export default function App() {
  return (
    <Router>
      <AdminProvider>
        <div className="relative">
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/products" element={<><Navbar /><Products /><Footer /></>} />
            <Route path="/product/:id" element={<><Navbar /><ProductDetails /><Footer /></>} />
            <Route path="/research" element={<><Navbar /><Research /><Footer /></>} />
            <Route path="/careers" element={<><Navbar /><Careers /><Footer /></>} />
            <Route path="/team" element={<><Navbar /><Team /><Footer /></>} />
            <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
            <Route path="/blog/:id" element={<><Navbar /><BlogPost /><Footer /></>} />
            <Route path="/job/:id" element={<><Navbar /><JobDetails /><Footer /></>} />

            {/* Routes admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="careers" element={<AdminCareers />} />
              <Route path="team" element={<AdminTeam />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </div>
      </AdminProvider>
    </Router>
  );
}