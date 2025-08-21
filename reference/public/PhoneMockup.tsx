import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PhoneMockupContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& img': {
    maxWidth: '100%',
    maxHeight: '500px',
    width: 'auto',
    height: 'auto',
    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
      maxHeight: '400px',
    },
  },
}));

interface PhoneMockupProps {
  type: 'map' | 'library';
  alt?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  type, 
  alt 
}) => {
  const imageSrc = type === 'map' 
    ? '/assets/overhear-assets/images/homepage/phonemockupmap.png'
    : '/assets/overhear-assets/images/homepage/phonemockuplibrary.png';

  const altText = alt || `Overhear app ${type} screen mockup`;

  return (
    <PhoneMockupContainer>
      <img 
        src={imageSrc}
        alt={altText}
      />
    </PhoneMockupContainer>
  );
};

export default PhoneMockup;