import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';

export function PageLayout() {
  const location = useLocation();

  return (
    <>
      <TopBar mode="topic" />
      <div className="page-wrap">
        <div className="wrap">
          <Sidebar />
          <div className="content animate-page-enter" key={location.pathname}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
