import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Research from './pages/Research';
import Careers from './pages/Careers';
import Team from './pages/Team';
import Blog from './pages/Blog';
import JobDetails from './pages/JobDetails';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/research" element={<Research />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
