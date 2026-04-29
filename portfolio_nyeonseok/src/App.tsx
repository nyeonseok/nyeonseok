import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import About from './pages/About';
import Skills from './pages/Skills';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-number">404</div>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p style={{ color: 'var(--text-secondary)' }}>요청하신 페이지가 존재하지 않아요.</p>
      <a href="/" className="btn btn-primary" style={{ marginTop: 8 }}>홈으로 돌아가기</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
