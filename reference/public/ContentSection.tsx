import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0',
  },
}));

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  image?: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  reverseOnMobile?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundColor = 'transparent',
  textColor = 'inherit',
  textAlign = 'center',
  maxWidth = 'lg',
  children,
  image,
  imagePosition = 'right',
  reverseOnMobile = false
}) => {
  const isVerticalLayout = imagePosition === 'top' || imagePosition === 'bottom';
  const isImageFirst = imagePosition === 'left' || imagePosition === 'top';

  const TextContent = (
    <Box sx={{ textAlign, color: textColor }}>
      {title && (
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' }, 
            mb: 2,
            fontWeight: 'bold',
            color: textColor
          }}
        >
          {title}
        </Typography>
      )}
      
      {subtitle && (
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 3, 
            opacity: 0.9,
            color: textColor
          }}
        >
          {subtitle}
        </Typography>
      )}
      
      {description && (
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            lineHeight: 1.8, 
            fontSize: '1.1rem',
            color: textColor,
            opacity: 0.9
          }}
        >
          {description}
        </Typography>
      )}
      
      {children}
    </Box>
  );

  const ImageContent = image ? (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title || 'Section image'}
        sx={{
          width: '100%',
          maxWidth: isVerticalLayout ? '600px' : '100%',
          height: 'auto',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      />
    </Box>
  ) : null;

  const GridContent = () => {
    if (!image) {
      return (
        <Grid item xs={12}>
          {TextContent}
        </Grid>
      );
    }

    if (isVerticalLayout) {
      return (
        <>
          <Grid item xs={12} order={isImageFirst ? 1 : 2}>
            {ImageContent}
          </Grid>
          <Grid item xs={12} order={isImageFirst ? 2 : 1}>
            {TextContent}
          </Grid>
        </>
      );
    }

    return (
      <>
        <Grid 
          item 
          xs={12} 
          md={6} 
          order={{ 
            xs: reverseOnMobile ? (isImageFirst ? 2 : 1) : (isImageFirst ? 1 : 2),
            md: isImageFirst ? 1 : 2 
          }}
        >
          {ImageContent}
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={6} 
          order={{ 
            xs: reverseOnMobile ? (isImageFirst ? 1 : 2) : (isImageFirst ? 2 : 1),
            md: isImageFirst ? 2 : 1 
          }}
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            pl: { md: isImageFirst ? 4 : 0 },
            pr: { md: isImageFirst ? 0 : 4 }
          }}
        >
          {TextContent}
        </Grid>
      </>
    );
  };

  return (
    <SectionContainer sx={{ backgroundColor }}>
      <Container maxWidth={maxWidth}>
        <Grid container spacing={4} alignItems="center">
          <GridContent />
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ContentSection;
