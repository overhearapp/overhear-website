import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'transparent',
  padding: '40px 0',
  textAlign: 'center',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  color: 'white',
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.7,
  },
}));

interface FooterLink {
  label: string;
  path?: string;
  url?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  copyrightText?: string;
  backgroundColor?: string;
  textColor?: string;
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  sections = [
    {
      title: 'About',
      links: [
        { label: 'Our Story', path: '/about' },
        { label: 'Mission', path: '/about#mission' },
        { label: 'Team', path: '/team' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Geolocated Audio', path: '/services#audio' },
        { label: 'Workshops', path: '/services#workshops' },
        { label: 'Consulting', path: '/services#consulting' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', path: '/blog' },
        { label: 'Help Centre', path: '/help' },
        { label: 'Documentation', path: '/docs' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact', path: '/contact' },
        { label: 'Partnerships', path: '/partnerships' },
        { label: 'Community', path: '/community' }
      ]
    }
  ],
  copyrightText,
  backgroundColor = 'transparent',
  textColor = 'white',
  companyName = 'The Overhear Project',
  year = new Date().getFullYear()
}) => {
  const navigate = useNavigate();

  const handleLinkClick = (link: FooterLink) => {
    if (link.url) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } else if (link.path) {
      navigate(link.path);
    }
  };

  const defaultCopyright = `© ${year} ${companyName}. All rights reserved.`;

  return (
    <FooterContainer sx={{ backgroundColor, color: textColor }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold',
                  color: textColor 
                }}
              >
                {section.title}
              </Typography>
              
              {section.links.map((link, linkIndex) => (
                <FooterLink
                  key={linkIndex}
                  variant="body2"
                  onClick={() => handleLinkClick(link)}
                  sx={{ 
                    display: 'block', 
                    mb: 1,
                    color: textColor,
                    opacity: 0.8,
                    '&:hover': { opacity: 1 }
                  }}
                >
                  {link.label}
                </FooterLink>
              ))}
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid ${textColor}20` }}>
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.7,
              color: textColor 
            }}
          >
            {copyrightText || defaultCopyright}
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
