import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const PageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
  color: 'white',
  padding: '120px 0 80px',
  textAlign: 'center',
}));

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const ContactInfoCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: '30px 20px',
  height: '100%',
}));

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement contact form submission to Firebase
      // For now, just simulate submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Ready to explore audio storytelling? Let's start a conversation.
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Get In Touch
            </Typography>
            <ContactForm onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Organization (Optional)"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Tell us about your project, space, or how you'd like to collaborate..."
                  />
                </Grid>
              </Grid>
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  mt: 2,
                  py: 2,
                  background: '#1e40af',
                  '&:hover': {
                    background: '#1e3a8a',
                  },
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitMessage && (
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2, 
                    p: 2, 
                    background: submitMessage.includes('error') ? '#fee2e2' : '#d1fae5',
                    borderRadius: 1,
                    color: submitMessage.includes('error') ? '#dc2626' : '#059669'
                  }}
                >
                  {submitMessage}
                </Typography>
              )}
            </ContactForm>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
              Contact Information
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ContactInfoCard>
                  <EmailIcon sx={{ fontSize: 40, color: '#1e40af', mb: 2 }} />
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      hello@theoverhear.app
                    </Typography>
                  </CardContent>
                </ContactInfoCard>
              </Grid>
              
              <Grid item xs={12}>
                <ContactInfoCard>
                  <LocationOnIcon sx={{ fontSize: 40, color: '#1e40af', mb: 2 }} />
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Dublin, Ireland
                    </Typography>
                  </CardContent>
                </ContactInfoCard>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, p: 3, background: '#f8fafc', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Project Inquiries
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Interested in bringing audio storytelling to your space? We work with:
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                <Typography component="li" variant="body2">Cultural institutions</Typography>
                <Typography component="li" variant="body2">Healthcare organizations</Typography>
                <Typography component="li" variant="body2">Educational establishments</Typography>
                <Typography component="li" variant="body2">Community groups</Typography>
                <Typography component="li" variant="body2">Festivals and events</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
