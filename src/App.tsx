import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './presentation/components/layout/PageLayout';
import { SidebarProvider } from './presentation/store/sidebarContext';

const HomePage = lazy(() => import('./presentation/pages/HomePage').then(m => ({ default: m.HomePage })));
const TopicPage = lazy(() => import('./presentation/pages/TopicPage').then(m => ({ default: m.TopicPage })));

export default function App() {
  return (
    <HashRouter>
      <SidebarProvider>
        <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: '14px', color: 'var(--ink3)' }}>Loading...</div>}>
          <Routes>
            {/* Home: standalone page with its own TopBar */}
            <Route path="/" element={<HomePage />} />

            {/* Topic pages: use PageLayout (TopBar + Sidebar + Outlet) */}
            <Route element={<PageLayout />}>
              <Route path="/pages/:topicFile" element={<TopicPage />} />
            </Route>
          </Routes>
        </Suspense>
      </SidebarProvider>
    </HashRouter>
  );
}
