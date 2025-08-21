import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { translate } from '../../i18n/translate';

const TopNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '20px 40px',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '15px 20px',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    gap: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '0.95rem',
  '&:hover': {
    opacity: 0.8,
  },
}));

interface NavigationProps {
  logoText?: string;
  logoImage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  logoText = translate("public.navigation.logo"),
  logoImage 
}) => {
  const navigate = useNavigate();

  const navigationItems = [
    { label: translate("public.navigation.home"), path: '/' },
    { label: translate("public.navigation.about"), path: '/about' },
    { label: translate("public.navigation.helpUs"), path: '/help' },
    { label: translate("public.navigation.blog"), path: '/blog' },
    { label: translate("public.navigation.poetsWritersModods"), path: '/poets' },
    { label: translate("public.navigation.contact"), path: '/contact' },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <TopNavigation>
      <Box 
        component="img"
        src={logoImage || "/assets/overhear-assets/images/overhearlight.png"}
        alt={logoText}
        onClick={handleLogoClick}
        sx={{ 
          height: '40px', 
          cursor: 'pointer',
          '&:hover': { opacity: 0.8 }
        }}
      />
      
      {navigationItems.map((item) => (
        <NavLink 
          key={item.path}
          onClick={() => handleNavClick(item.path)}
        >
          {item.label}
        </NavLink>
      ))}
    </TopNavigation>
  );
};

export default Navigation;
