import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import ProjectsPage from './ProjectsPage';
import TeamPage from './TeamPage'; 
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

// Create a theme specifically for the public website
const publicTheme = createTheme({
  palette: {
    primary: {
      main: '#1e40af', // Blue from your design
    },
    secondary: {
      main: '#ef4444', // Red from the location pin
    },
    background: {
      default: '#1e3a8a', // Main blue gradient start
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"SifonnOutline", "SF Pro Display", sans-serif',
      fontWeight: 'normal',
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 'bold',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      },
    },
  },
});

const PublicApp: React.FC = () => {
  return (
    <ThemeProvider theme={publicTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch all for 404 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default PublicApp;
