import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
  color: 'white',
  padding: '120px 0 80px',
  textAlign: 'center',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
}));

const AboutPage: React.FC = () => {
  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
            About Overhear
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Creating engagement through the symbiotic relationship between creative audio & location
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <ContentSection>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                We invite you to attune your perceptions to the undercurrents of creative audio 
                sitting just below the surface of creative spaces. Move into the stream & see what 
                eddies and whirlpools form in response to simply being where you stand.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Tap into the potential of the spaces you steward and work with artists and producers 
                to explore the relationships we can foster.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                background: '#f8fafc', 
                p: 4, 
                borderRadius: 2,
                textAlign: 'center'
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Get In Touch
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Ready to explore audio storytelling in your space?
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1e40af' }}>
                  hello@theoverhear.app
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ContentSection>

        <ContentSection>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
            What We Do
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1e40af', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2rem'
                }}>
                  🎧
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Geolocated Audio Experiences
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Digital maps of audio content that connect stories to specific locations, 
                  creating immersive experiences for cities, festivals, galleries, and museums.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1e40af', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2rem'
                }}>
                  📖
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Creative Facilitation
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Expert curation, direction and management of audio storytelling projects, 
                  working with communities to uncover and share their unique narratives.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  background: '#1e40af', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2rem'
                }}>
                  🎯
                </Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Social Audio Innovation
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Real-world audio experiences designed to create connection, understanding, 
                  and community engagement through shared listening.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default AboutPage;
