import { createBrowserRouter, Link, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/** 청크 로딩 실패 등 예외 상황 */
function RouteError() {
  return (
    <main className="page-hero page-hero--center">
      <div className="container">
        <title>문제가 생겼습니다 — 안현석</title>
        <h1 className="page-hero__title">페이지를 불러오지 못했습니다</h1>
        <p className="page-hero__lead">새로고침하거나 Home에서 다시 시작해 주세요.</p>
        <p className="page-hero__actions">
          <Link to="/" className="button button--primary" reloadDocument>
            Home으로
          </Link>
        </p>
      </div>
    </main>
  );
}

// Home은 첫 화면이므로 바로 포함하고, 나머지 페이지는 이동할 때 불러온다.
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', lazy: async () => ({ Component: (await import('./pages/Projects')).default }) },
      { path: 'projects/:slug', lazy: async () => ({ Component: (await import('./pages/ProjectDetail')).default }) },
      { path: 'experience', lazy: async () => ({ Component: (await import('./pages/Experience')).default }) },
      { path: 'about', lazy: async () => ({ Component: (await import('./pages/About')).default }) },
      { path: 'extras', lazy: async () => ({ Component: (await import('./pages/Extras')).default }) },

      // 이전 사이트 주소
      { path: 'work', element: <Navigate to="/experience" replace /> },
      { path: 'work/:id', element: <Navigate to="/experience" replace /> },
      { path: 'skills', element: <Navigate to="/about#skills" replace /> },

      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
