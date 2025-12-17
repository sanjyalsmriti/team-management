import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import './styles/App.css';

// Code splitting with React.lazy
const Users = lazy(() => import('./pages/Users'));
const AddUser = lazy(() => import('./pages/AddUser'));

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="*" element={
                  <div className="not-found">
                    <h2>404 - Page Not Found</h2>
                    <p>The page you're looking for doesn't exist.</p>
                  </div>
                } />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ToastProvider>
    </ErrorBoundary>
  );
}
export default App;