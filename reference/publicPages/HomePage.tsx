import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Navigation,
  SocialLinks,
  HeroSection,
  AppBadges,
  TestimonialSection,
  ServicesSection,
  ContentSection,
  ArtistGallery,
  Footer,
  PhoneMockup,
  type Testimonial,
  type Service
} from '../../components/public';
import { translate } from '../../i18n/translate';

const HomePage: React.FC = () => {
  // Data for testimonials from i18n
  const testimonials: Testimonial[] = [
    {
      id: '1',
      type: 'quote',
      text: "The whole team at OVERHEAR made the experience of working with them a seamless and enjoyable experience, allowing me to concentrate fully on the writing and recording of my piece.",
      author: "Rick Sanders - Poet"
    },
    {
      id: '2',
      type: 'star',
      text: "really fun way to hear new poetry while being guided to find some cool and interesting places in the city",
      author: "Naomi R",
      rating: 5
    },
    {
      id: '3',
      type: 'star',
      text: "added so many rich layers to the experience of discovering a place",
      author: "Landres",
      rating: 5
    },
    {
      id: '4',
      type: 'quote',
      text: "...a terrific experience, both for our Birmingham Literature Festival audiences & the many writers we have been able to involve. New work has been made & new audiences discovered, Tom & his team have been both creative & entrepreneurial in their approach.",
      author: "Jonathan Davidson -",
      authorTitle: "Writing West Midlands"
    },
    {
      id: '5',
      type: 'picture',
      text: "take a walk around the city with the App, and collect all the gorgeous statue poems dotted around!",
      author: "scarlet.ward",
      image: "/assets/overhear-assets/images/testimonials/user-photo.jpg"
    }
  ];

  // Data for services from i18n
  const services: Service[] = [
    {
      id: '1',
      title: translate("public.sections.services.geolocatedAudio.title"),
      description: translate("public.sections.services.geolocatedAudio.description"),
      icon: '🎧'
    },
    {
      id: '2',
      title: translate("public.sections.services.storytelling.title"),
      description: translate("public.sections.services.storytelling.description"),
      icon: '📖'
    },
    {
      id: '3',
      title: translate("public.sections.services.socialAudio.title"),
      description: translate("public.sections.services.socialAudio.description"),
      icon: '🎯'
    }
  ];



  return (
    <Box sx={{ backgroundColor: '#285092' }}>
      {/* Navigation */}
      <Navigation />
      
      {/* Social Links */}
      <SocialLinks 
        facebook="https://facebook.com/overhear"
        twitter="https://twitter.com/overhear"
        instagram="https://instagram.com/overhear"
      />

      {/* Hero Section */}
      <HeroSection
        logoImage="/assets/overhear-assets/images/overhearlight.png"
      >
        <AppBadges 
          appleStoreUrl="https://apps.apple.com/app/overhear"
          googlePlayUrl="https://play.google.com/store/apps/details?id=com.overhear"
          appleText={translate("public.hero.appStore")}
          googleText={translate("public.hero.googlePlay")}
        />
        
        {/* Testimonials */}
        <TestimonialSection testimonials={testimonials} />
      </HeroSection>

      {/* Geolocated Audio Section */}
      <ContentSection
        title={translate("public.sections.geolocatedAudio.title")}
        subtitle={translate("public.sections.geolocatedAudio.subtitle")}
        description={translate("public.sections.geolocatedAudio.description")}
        backgroundColor="transparent"
        textColor="white"
      >
        {/* Interactive Phone Mockups */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 4,
          position: 'relative',
          height: { xs: '800px', md: '600px' },
          alignItems: 'center',
        }}>
          {/* Library mockup - behind and smaller */}
          <Box sx={{
            position: 'absolute',
            left: { xs: '25%', sm: '40%' },
            top: '40%',
            transform: { xs: 'translate(-50%, -50%)', sm: 'translate(-50%, -50%)' },
            zIndex: 1,
            scale: { xs: '0.7', sm: '1' },
          }}>
            <PhoneMockup type="library" />
          </Box>
          
          {/* Map mockup - in front and larger */}
          <Box sx={{
            position: 'absolute',
            right: '45%',
            top: { xs: '42.5%', sm: '45%' },
            transform: { xs: 'translate(50%, -50%)', sm: 'translate(50%, -50%)' },
            zIndex: 2,
            scale: { xs: '0.8', sm: '1.2' },
          }}>
            <PhoneMockup type="map" />
          </Box>
        </Box>
      </ContentSection>

      {/* Services Section */}
      <ServicesSection
        title={translate("public.sections.services.title")}
      />

      {/* About Section */}
      <ContentSection
        title={translate("public.sections.about.title")}
        description={translate("public.sections.about.subtitle")}
        backgroundColor="transparent"
        textColor="white"
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Box sx={{ mb: 3, opacity: 0.8 }}>
            {translate("public.sections.about.description1")}
          </Box>

          <Box sx={{ mb: 3, opacity: 0.8 }}>
            {translate("public.sections.about.description2")}
          </Box>

          <Box sx={{ mb: 6, opacity: 0.8 }}>
            {translate("public.sections.about.description3")}
          </Box>

          <Box sx={{ mb: 6 }}>
            {translate("public.sections.about.contact")}
          </Box>
        </Box>
      </ContentSection>

      {/* Artist Gallery Section */}
      <ArtistGallery
        title={translate("public.sections.team.title")}
        subtitle={translate("public.sections.team.subtitle")}
      />

      {/* Footer */}
      <Footer 
        companyName="Overhear ltd"
        sections={[
          {
            title: translate("public.footer.sections.about.title"),
            links: [
              { label: translate("public.footer.sections.about.links.ourStory"), path: '/about' },
              { label: translate("public.footer.sections.about.links.mission"), path: '/about' },
              { label: translate("public.footer.sections.about.links.team"), path: '/team' }
            ]
          },
          {
            title: translate("public.footer.sections.services.title"),
            links: [
              { label: translate("public.footer.sections.services.links.geolocatedAudio"), path: '/services' },
              { label: translate("public.footer.sections.services.links.workshops"), path: '/workshops' },
              { label: translate("public.footer.sections.services.links.consulting"), path: '/contact' }
            ]
          },
          {
            title: translate("public.footer.sections.resources.title"),
            links: [
              { label: translate("public.footer.sections.resources.links.blog"), path: '/blog' },
              { label: translate("public.footer.sections.resources.links.helpUs"), path: '/help' },
              { label: translate("public.footer.sections.resources.links.documentation"), path: '/docs' }
            ]
          },
          {
            title: translate("public.footer.sections.connect.title"),
            links: [
              { label: translate("public.footer.sections.connect.links.contact"), path: '/contact' },
              { label: translate("public.footer.sections.connect.links.poetsWritersModods"), path: '/poets' },
              { label: translate("public.footer.sections.connect.links.community"), path: '/community' }
            ]
          }
        ]}
        copyrightText={translate("public.footer.copyright", { year: new Date().getFullYear().toString() })}
      />
    </Box>
  );
};

export default HomePage;