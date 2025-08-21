import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Timestamp } from 'firebase/firestore';

// Styled components
const PageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
  color: 'white',
  padding: '120px 0 80px',
  textAlign: 'center',
}));

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const BlogContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const TagContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  marginBottom: '12px',
}));

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  tags: string[];
  author: string;
  publishedAt: Timestamp;
  status: 'published' | 'draft';
}

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch blog posts from Firestore
    // For now, using mock data
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Exploring Geolocated Audio in Urban Spaces',
        slug: 'exploring-geolocated-audio-urban-spaces',
        excerpt: 'How location-specific audio experiences are transforming our understanding of public spaces and community engagement.',
        content: '<p>Full blog post content would go here...</p>',
        featuredImage: '/images/blog/urban-audio.jpg',
        tags: ['Urban Planning', 'Audio Technology', 'Community'],
        author: 'The Overhear Team',
        publishedAt: Timestamp.now(),
        status: 'published',
      },
      {
        id: '2',
        title: 'Workshop Spotlight: Voices from MMUH',
        slug: 'workshop-spotlight-voices-mmuh',
        excerpt: 'A deep dive into our recent workshop collaboration with Mater Misericordiae University Hospital.',
        content: '<p>Full blog post content would go here...</p>',
        featuredImage: '/images/blog/mmuh-workshop.jpg',
        tags: ['Workshops', 'Healthcare', 'Storytelling'],
        author: 'The Overhear Team',
        publishedAt: Timestamp.now(),
        status: 'published',
      },
      {
        id: '3',
        title: 'The Power of Shared Audio Experiences',
        slug: 'power-shared-audio-experiences',
        excerpt: 'Understanding how collective listening creates deeper connections between communities and places.',
        content: '<p>Full blog post content would go here...</p>',
        featuredImage: '/images/blog/shared-audio.jpg',
        tags: ['Community', 'Audio Experience', 'Research'],
        author: 'The Overhear Team',
        publishedAt: Timestamp.now(),
        status: 'published',
      },
    ];

    setBlogPosts(mockPosts);

    if (slug) {
      const post = mockPosts.find(p => p.slug === slug);
      setSelectedPost(post || null);
    }

    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  // Single blog post view
  if (slug && selectedPost) {
    return (
      <Box>
        <PageHeader>
          <Container maxWidth="lg">
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
              {selectedPost.title}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
              By {selectedPost.author} • {selectedPost.publishedAt.toDate().toLocaleDateString()}
            </Typography>
            <TagContainer sx={{ justifyContent: 'center' }}>
              {selectedPost.tags.map((tag) => (
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
            </TagContainer>
          </Container>
        </PageHeader>

        <Container maxWidth="md" sx={{ py: 8 }}>
          {selectedPost.featuredImage && (
            <Box sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
              <img 
                src={selectedPost.featuredImage} 
                alt={selectedPost.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          )}
          
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            {selectedPost.excerpt}
          </Typography>
          
          <Box sx={{ mt: 4 }}>
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </Box>

          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #e5e7eb' }}>
            <Button 
              variant="outlined" 
              onClick={() => window.history.back()}
              sx={{ mr: 2 }}
            >
              ← Back to Blog
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  // Blog listing view
  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
            Blog
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Stories, insights, and updates from the Overhear community
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <BlogCard>
                {post.featuredImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.featuredImage}
                    alt={post.title}
                  />
                )}
                <BlogContent>
                  <TagContainer>
                    {post.tags.slice(0, 2).map((tag) => (
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
                  </TagContainer>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 2, flexGrow: 1, color: 'text.secondary' }}>
                    {post.excerpt}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {post.publishedAt.toDate().toLocaleDateString()}
                    </Typography>
                    <Button 
                      size="small" 
                      variant="text"
                      href={`/blog/${post.slug}`}
                      sx={{ textTransform: 'none' }}
                    >
                      Read More →
                    </Button>
                  </Box>
                </BlogContent>
              </BlogCard>
            </Grid>
          ))}
        </Grid>

        {blogPosts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              No blog posts available yet
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Check back soon for updates and stories from the Overhear community.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BlogPage;
