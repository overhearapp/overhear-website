import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BadgeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  marginTop: '30px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
}));

const AppBadgeLink = styled('a')(({ theme }) => ({
  display: 'block',
  transition: 'transform 0.2s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& img': {
    height: '50px',
    width: 'auto',
    display: 'block',
  }
}));

interface AppBadgesProps {
  appleStoreUrl?: string;
  googlePlayUrl?: string;
  appleText?: string;
  googleText?: string;
  showApple?: boolean;
  showGoogle?: boolean;
}

const AppBadges: React.FC<AppBadgesProps> = ({
  appleStoreUrl,
  googlePlayUrl,
  appleText = "Download on the App Store",
  googleText = "Get it on Google Play",
  showApple = true,
  showGoogle = true,
}) => {
  return (
    <BadgeContainer>
      {showApple && appleStoreUrl && (
        <AppBadgeLink
          href={appleStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="/assets/overhear-assets/images/App store.png" 
            alt={appleText}
          />
        </AppBadgeLink>
      )}
      {showGoogle && googlePlayUrl && (
        <AppBadgeLink
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="/assets/overhear-assets/images/Play store.png" 
            alt={googleText}
          />
        </AppBadgeLink>
      )}
    </BadgeContainer>
  );
};

export default AppBadges;
