import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  position: 'fixed',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    position: 'static',
    flexDirection: 'row',
    justifyContent: 'center',
    transform: 'none',
    marginTop: '20px',
  },
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  color: 'white',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  '&:hover': { 
    opacity: 0.8,
    transform: 'scale(1.1)',
  },
}));

interface SocialLinksProps {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  orientation?: 'vertical' | 'horizontal';
  position?: 'fixed' | 'static';
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
  orientation = 'vertical',
  position = 'fixed'
}) => {
  const handleSocialClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const socialLinks = [
    { icon: FacebookIcon, url: facebook, name: 'Facebook' },
    { icon: TwitterIcon, url: twitter, name: 'Twitter' },
    { icon: InstagramIcon, url: instagram, name: 'Instagram' },
    { icon: LinkedInIcon, url: linkedin, name: 'LinkedIn' },
    { icon: YouTubeIcon, url: youtube, name: 'YouTube' },
  ].filter(social => social.url); // Only show links that have URLs

  if (socialLinks.length === 0) return null;

  return (
    <SocialContainer 
      sx={{
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        position: position,
        ...(position === 'static' && {
          position: 'static',
          transform: 'none',
          right: 'auto',
          top: 'auto',
        })
      }}
    >
      {socialLinks.map(({ icon: Icon, url, name }) => (
        <SocialIcon 
          key={name}
          onClick={() => handleSocialClick(url!)}
          title={`Visit our ${name}`}
        >
          <Icon />
        </SocialIcon>
      ))}
    </SocialContainer>
  );
};

export default SocialLinks;
