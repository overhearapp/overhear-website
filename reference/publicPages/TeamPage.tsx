import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
  color: 'white',
  padding: '120px 0 80px',
  textAlign: 'center',
}));

const TeamCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: '20px',
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  expertise: string[];
}

const TeamPage: React.FC = () => {
  // TODO: Fetch team members from Firestore
  // For now, using mock data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'The Overhear Team',
      role: 'Creative Facilitators',
      bio: 'Our diverse team of creative facilitators brings together expertise in audio storytelling, community engagement, and spatial design.',
      expertise: ['Audio Production', 'Community Facilitation', 'Creative Writing'],
    },
    // Add more team members as needed
  ];

  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
            Our Team
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Creative facilitators passionate about audio storytelling and community engagement
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
              <TeamCard>
                <Avatar 
                  src={member.image} 
                  alt={member.name}
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    margin: '0 auto 20px',
                    backgroundColor: '#1e40af'
                  }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#1e40af', mb: 2 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {member.expertise.map((skill) => (
                      <Box 
                        key={skill}
                        sx={{
                          background: '#f3f4f6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          color: '#374151'
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8, py: 6, background: '#f8fafc', borderRadius: 2 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
            Join Our Community
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
            We're always looking for passionate facilitators, artists, and community partners 
            who share our vision of creating meaningful connections through audio storytelling.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1e40af' }}>
            Get in touch: hello@theoverhear.app
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamPage;
