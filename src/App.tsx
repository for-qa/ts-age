import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './presentation/pages/HomePage';
import { TopicPage } from './presentation/pages/TopicPage';
import { PageLayout } from './presentation/components/layout/PageLayout';
import { SidebarProvider } from './presentation/store/sidebarContext';

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          {/* Home: standalone page with its own TopBar */}
          <Route path="/" element={<HomePage />} />

          {/* Topic pages: use PageLayout (TopBar + Sidebar + Outlet) */}
          <Route element={<PageLayout />}>
            <Route path="/pages/:topicFile" element={<TopicPage />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}
