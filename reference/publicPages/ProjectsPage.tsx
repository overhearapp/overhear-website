import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Timestamp } from 'firebase/firestore';

const PageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
  color: 'white',
  padding: '120px 0 80px',
  textAlign: 'center',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const ProjectContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  featuredImage?: string;
  gallery?: string[];
  location: string;
  partner: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  tags: string[];
  completedAt?: Timestamp;
}

const ProjectsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch projects from Firestore
    // For now, using mock data
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'Voices from MMUH',
        slug: 'voices-from-mmuh',
        description: 'Audio storytelling project capturing the experiences of healthcare workers and patients at Mater Misericordiae University Hospital.',
        longDescription: 'An immersive audio storytelling project that captures the diverse experiences, challenges, and triumphs of healthcare workers and patients at Mater Misericordiae University Hospital. Through facilitated workshops and one-on-one recordings, we created a digital map of stories that highlights the human connections at the heart of healthcare.',
        featuredImage: '/images/projects/mmuh-project.jpg',
        location: 'Dublin, Ireland',
        partner: 'Mater Misericordiae University Hospital',
        status: 'completed',
        tags: ['Healthcare', 'Community Stories', 'Workshop-based'],
        completedAt: Timestamp.now(),
      },
      {
        id: '2',
        title: 'Festival Audio Map',
        slug: 'festival-audio-map',
        description: 'Interactive geolocated audio experience for festival attendees, featuring artist stories and behind-the-scenes content.',
        longDescription: 'A comprehensive audio mapping project for music festival audiences, creating an additional layer of engagement through location-specific artist stories, historical venue information, and exclusive behind-the-scenes content accessible through the Overhear app.',
        featuredImage: '/images/projects/festival-map.jpg',
        location: 'Various Festival Sites',
        partner: 'Independent Artists Collective',
        status: 'ongoing',
        tags: ['Music Festivals', 'Geolocated Audio', 'Artist Stories'],
      },
      {
        id: '3',
        title: 'Urban Soundscapes',
        slug: 'urban-soundscapes',
        description: 'Collaborative project mapping the acoustic identity of urban spaces through community participation.',
        longDescription: 'A community-driven exploration of urban acoustic environments, working with local residents to document and share the unique soundscapes that define their neighbourhoods. The project combines field recordings, personal narratives, and historical research.',
        featuredImage: '/images/projects/urban-soundscapes.jpg',
        location: 'Multiple Cities',
        partner: 'Urban Planning Institute',
        status: 'upcoming',
        tags: ['Urban Planning', 'Community Mapping', 'Environmental Audio'],
      },
    ];

    setProjects(mockProjects);

    if (slug) {
      const project = mockProjects.find(p => p.slug === slug);
      setSelectedProject(project || null);
    }

    setLoading(false);
  }, [slug]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'ongoing': return '#f59e0b';
      case 'upcoming': return '#6366f1';
      default: return '#6b7280';
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  // Single project view
  if (slug && selectedProject) {
    return (
      <Box>
        <PageHeader>
          <Container maxWidth="lg">
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
              {selectedProject.title}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              {selectedProject.location} • {selectedProject.partner}
            </Typography>
            <Chip 
              label={selectedProject.status.toUpperCase()} 
              sx={{ 
                backgroundColor: getStatusColor(selectedProject.status),
                color: 'white',
                fontWeight: 'bold',
                mb: 3
              }} 
            />
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              {selectedProject.tags.map((tag) => (
                <Chip 
                  key={tag} 
                  label={tag} 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
                  }} 
                />
              ))}
            </Box>
          </Container>
        </PageHeader>

        <Container maxWidth="md" sx={{ py: 8 }}>
          {selectedProject.featuredImage && (
            <Box sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
              <img 
                src={selectedProject.featuredImage} 
                alt={selectedProject.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          )}
          
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
            {selectedProject.longDescription}
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Project Details
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Location:</strong> {selectedProject.location}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Partner:</strong> {selectedProject.partner}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Status:</strong> {selectedProject.status}
              </Typography>
              {selectedProject.completedAt && (
                <Typography variant="body2">
                  <strong>Completed:</strong> {selectedProject.completedAt.toDate().toLocaleDateString()}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #e5e7eb' }}>
            <Button 
              variant="outlined" 
              onClick={() => window.history.back()}
              sx={{ mr: 2 }}
            >
              ← Back to Projects
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  // Projects listing view
  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
            Projects
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Exploring audio storytelling across communities and spaces
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard>
                {project.featuredImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.featuredImage}
                    alt={project.title}
                  />
                )}
                <ProjectContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                      {project.title}
                    </Typography>
                    <Chip 
                      label={project.status} 
                      size="small"
                      sx={{ 
                        backgroundColor: getStatusColor(project.status),
                        color: 'white',
                        ml: 1
                      }} 
                    />
                  </Box>
                  
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {project.location} • {project.partner}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {project.tags.slice(0, 2).map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        size="small"
                        sx={{ 
                          backgroundColor: '#f3f4f6', 
                          '&:hover': { backgroundColor: '#e5e7eb' }
                        }} 
                      />
                    ))}
                  </Box>
                  
                  <Button 
                    size="small" 
                    variant="text"
                    href={`/projects/${project.slug}`}
                    sx={{ textTransform: 'none', alignSelf: 'flex-start' }}
                  >
                    Learn More →
                  </Button>
                </ProjectContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        {projects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              No projects available yet
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Check back soon to see our latest audio storytelling projects.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsPage;
