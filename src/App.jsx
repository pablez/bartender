import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './components/auth/Login';
import Home from './pages/Home';
import Posts from './pages/Posts';
import AdminPanel from './pages/AdminPanel';
import './App.css'

function AppRoutes() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route 
        path="/login" 
        element={currentUser ? <Navigate to="/" replace /> : <Login />} 
      />
      
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/posts" 
        element={
          <PrivateRoute>
            <Posts />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/admin" 
        element={
          <PrivateRoute adminOnly={true}>
            <AdminPanel />
          </PrivateRoute>
        } 
      />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App
