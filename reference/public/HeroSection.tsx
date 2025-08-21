import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  background: 'transparent', // Use HomePage background
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  color: 'white',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  textAlign: 'center',
  paddingTop: '120px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '140px',
  },
}));



interface HeroSectionProps {
  subtitle?: string;
  description?: string;
  logoImage?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  description,
  logoImage,
  backgroundImage,
  backgroundGradient = 'transparent',
  children
}) => {
  const getBackgroundStyle = () => {
    if (backgroundImage) {
      return {
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 64, 175, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
    return {
      background: backgroundGradient,
    };
  };

  return (
    <HeroContainer sx={getBackgroundStyle()}>
      <HeroContent maxWidth="lg">
        {logoImage && (
          <Box 
            component="img"
            src={logoImage}
            alt="Overhear Logo"
            sx={{ 
              maxHeight: '280px',
              marginBottom: '20px',
            }}
          />
        )}
        
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '4rem', md: '6rem' }, 
            fontFamily: '"SifonnOutline", "Arial Black", sans-serif',
            fontWeight: 'normal',
            letterSpacing: '0.1em',
            marginBottom: subtitle ? '10px' : '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            color: 'white',
          }}
        >
          OVERHEAR
        </Typography>

        {subtitle && (
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2rem' }, 
              fontWeight: 'normal',
              marginBottom: '20px',
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {description && (
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' }, 
              fontWeight: 'normal',
              marginBottom: '30px',
              opacity: 0.8,
              maxWidth: '600px',
            }}
          >
            {description}
          </Typography>
        )}

        {children}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
