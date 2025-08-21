import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ServicesContainer = styled(Box)(() => ({
  background: 'transparent',
  padding: '80px 0',
  textAlign: 'center',
}));

const ServiceCard = styled(Box)(() => ({
  textAlign: 'center',
  padding: '40px 20px',
  color: 'white',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));


export interface Service {
  id?: string;
  title: string;
  description: string;
  icon?: string;
  iconComponent?: React.ReactNode;
  image?: string;
  secondaryImage?: string;
  link?: string;
}

interface ServicesSectionProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  maxColumns?: number;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  title = "Services",
  subtitle = "Explore our innovative audio delivery technology that brings stories, poetry and oral histories to life through geolocation and/or QR codes. Immerse listeners in sequential collection, branching narratives, and transit collection experiences.",
  backgroundColor = 'transparent',
  textColor = 'white',
  maxColumns = 3
}) => {
  // Default services if none are provided
  const defaultServices: Service[] = [
    {
      id: '1',
      title: 'Geo-Location & QR',
      description: 'Collect audio on location using geolocation or QR codes. Explore your surroundings to discover audio linked to specific places and quickly access exclusive clips using the OVERHEAR app.',
      image: '/assets/overhear-assets/images/homepage/Geo-QR_edited.png'
    },
    {
      id: '2', 
      title: 'Sequential & Branching Audio',
      description: 'Projects can provide listeners with a sequential audio journey or a choose-your-own-adventure style branching narrative through a location.',
      image: '/assets/overhear-assets/images/homepage/sequential_edited.png',
      secondaryImage: '/assets/overhear-assets/images/homepage/branching.png'
    },
    {
      id: '3',
      title: 'Transit Audio',
      description: 'Transit projects let listeners collect episodic audio as they travel between any two pins in a project, great for regular commuters using public transport.',
      image: '/assets/overhear-assets/images/homepage/Transit_edited.png'
    }
  ];

  const servicesToShow = services && services.length > 0 ? services : defaultServices;

  const handleServiceClick = (service: Service) => {
    if (service.link) {
      window.open(service.link, '_blank', 'noopener,noreferrer');
    }
  };

  const getGridSize = () => {
    const cols = Math.min(servicesToShow.length, maxColumns);
    return 12 / cols;
  };

  return (
    <ServicesContainer sx={{ background: backgroundColor }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 6, 
            fontSize: { xs: '2rem', md: '3rem' },
            color: textColor,
            fontWeight: 'bold'
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 8, 
            opacity: 0.9,
            color: textColor,
            maxWidth: '900px',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </Typography>

        <Grid container spacing={4}>
          {servicesToShow.map((service, index) => (
            <Grid item xs={12} md={getGridSize()} key={service.id || index}>
              <ServiceCard
                onClick={() => handleServiceClick(service)}
                sx={{ 
                  cursor: service.link ? 'pointer' : 'default',
                  color: textColor 
                }}
              >
                <Box
                  sx={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    gap: 1
                  }}
                >
                  {service.iconComponent || (
                    service.image ? (
                      service.secondaryImage ? (
                        // Display two images side by side
                        <>
                          <Box
                            component="img"
                            src={service.image}
                            alt={`${service.title} - Sequential`}
                            sx={{ 
                              width: '50%', 
                              height: '100%', 
                              objectFit: 'contain',
                              filter: 'brightness(1.1)'
                            }}
                          />
                          <Box
                            component="img"
                            src={service.secondaryImage}
                            alt={`${service.title} - Branching`}
                            sx={{ 
                              width: '50%', 
                              height: '100%', 
                              objectFit: 'contain',
                              filter: 'brightness(1.1)'
                            }}
                          />
                        </>
                      ) : (
                        // Display single image
                        <Box
                          component="img"
                          src={service.image}
                          alt={service.title}
                          sx={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain',
                            filter: 'brightness(1.1)'
                          }}
                        />
                      )
                    ) : (
                      <Typography sx={{ fontSize: '3rem' }}>
                        {service.icon || '🔧'}
                      </Typography>
                    )
                  )}
                </Box>
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3, 
                    color: textColor,
                    fontWeight: 'bold',
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: textColor,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    maxWidth: '280px',
                    mx: 'auto'
                  }}
                >
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;
