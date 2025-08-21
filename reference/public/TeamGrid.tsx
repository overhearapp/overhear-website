import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const TeamContainer = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0',
  },
}));

const TeamMemberCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: '20px',
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const PlaceholderGrid = styled(Grid)(({ theme }) => ({
  marginTop: '60px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '10px',
}));

const PlaceholderMember = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '120px',
  borderRadius: '8px',
  overflow: 'hidden',
  background: '#374151',
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
  },
}));

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  expertise?: string[];
}

interface TeamGridProps {
  teamMembers?: TeamMember[];
  title?: string;
  subtitle?: string;
  placeholderCount?: number;
  showPlaceholder?: boolean;
  backgroundColor?: string;
  textColor?: string;
  maxColumns?: number;
}

const TeamGrid: React.FC<TeamGridProps> = ({
  teamMembers = [],
  title = "Our Team",
  subtitle,
  placeholderCount = 16,
  showPlaceholder = false,
  backgroundColor = 'transparent',
  textColor = 'inherit',
  maxColumns = 4
}) => {
  const hasTeamMembers = teamMembers && teamMembers.length > 0;

  const getGridSize = () => {
    if (!hasTeamMembers) return 12;
    const cols = Math.min(teamMembers.length, maxColumns);
    return 12 / cols;
  };

  return (
    <TeamContainer sx={{ backgroundColor }}>
      {(title || subtitle) && (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {title && (
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' }, 
                mb: 2,
                color: textColor
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography 
              variant="h6" 
              sx={{ 
                opacity: 0.9,
                color: textColor,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {hasTeamMembers ? (
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={getGridSize()} key={member.id || index}>
              <TeamMemberCard>
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
                  
                  {member.bio && (
                    <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {member.bio}
                    </Typography>
                  )}
                  
                  {member.expertise && member.expertise.length > 0 && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {member.expertise.map((skill, skillIndex) => (
                        <Box 
                          key={skillIndex}
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
                  )}
                </CardContent>
              </TeamMemberCard>
            </Grid>
          ))}
        </Grid>
      ) : showPlaceholder && (
        <PlaceholderGrid container>
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <PlaceholderMember key={index} />
          ))}
        </PlaceholderGrid>
      )}
    </TeamContainer>
  );
};

export default TeamGrid;
