import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  ResponsiveBreakpoint, 
  getScaledFontSize, 
  getScaledSpacing, 
  createResponsiveValue 
} from '../../theme';

const TestimonialContainer = styled(Box)(({ theme }) => ({
  padding: '0 40px 60px',
  display: 'grid',
  gap: '20px',
  justifyContent: 'center',
  maxWidth: '1600px',
  margin: '0 auto',
  
  // Large screens: 5 cards in one row (same size as LG)
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(5, 200px)',
    gap: '15px', // Match LG gap
    padding: '0 80px 60px', // Match LG padding
    justifyContent: 'center',
  },
  
  // Medium-large screens: 3 cards top, 2 cards bottom (centered)
  [theme.breakpoints.between('lg', 'xl')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    padding: '0 100px 60px',
    justifyItems: 'center',
    '& > *:nth-of-type(1)': {
      gridColumn: '1 / 3',
    },
    '& > *:nth-of-type(2)': {
      gridColumn: '3 / 5',
    },
    '& > *:nth-of-type(3)': {
      gridColumn: '5 / 7',
    },
    '& > *:nth-of-type(4)': {
      gridColumn: '2 / 4',
    },
    '& > *:nth-of-type(5)': {
      gridColumn: '4 / 6',
    },
  },
  
  // Medium screens: 2+3 layout
  [theme.breakpoints.between('md', 'lg')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '15px',
    padding: '0 80px 60px',
    justifyItems: 'center',
    '& > *:nth-of-type(1)': {
      gridColumn: '1 / 3',
    },
    '& > *:nth-of-type(2)': {
      gridColumn: '3 / 5',
    },
    '& > *:nth-of-type(3)': {
      gridColumn: '5 / 7',
    },
    '& > *:nth-of-type(4)': {
      gridColumn: '2 / 4',
    },
    '& > *:nth-of-type(5)': {
      gridColumn: '4 / 6',
    },
  },
  
  // Small screens: 2 cards per row with 5th centered
  [theme.breakpoints.down('md')]: {
    padding: '0 20px 40px',
    gridTemplateColumns: 'repeat(2, 180px)',
    gap: '15px',
    justifyContent: 'center',
    '& > *:nth-of-type(5)': {
      gridColumn: '1 / 3',
      justifySelf: 'center',
    },
  },
  
  // Extra small screens
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 160px)',
    '& > *:nth-of-type(5)': {
      gridColumn: '1 / 3',
      justifySelf: 'center',
    },
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  // Responsive square dimensions - XL and LG both use 200px
  width: '200px',
  height: '200px',
  background: 'rgba(255,255,255,0.98)',
  color: '#333',
  transition: 'transform 0.2s ease-in-out',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  },
  '&.picture-testimonial': {
    background: 'linear-gradient(45deg, rgba(30,58,138,0.1) 0%, rgba(59,130,246,0.1) 100%)',
    overflow: 'hidden',
  },
  // Maintain square aspect ratio across all screen sizes
  [theme.breakpoints.down('md')]: {
    width: '180px',
    height: '180px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '160px',
    height: '160px',
  },
}));

export interface Testimonial {
  id?: string;
  type: 'quote' | 'star' | 'picture';
  text: string;
  author: string;
  authorTitle?: string;
  authorImage?: string;
  image?: string;
  rating?: number;
  featured?: boolean;
  company?: string;
  location?: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  showRatings?: boolean;
  maxPerRow?: number;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  title,
  subtitle,
  showRatings = true,
  maxPerRow = 4
}) => {
  if (!testimonials || testimonials.length === 0) return null;

  // Responsive font scaling based on screen size and text length
  const getTextFontSize = (textLength: number, breakpoint: ResponsiveBreakpoint): string => {
    // Base sizes for xl (desktop reference)
    const baseSizes = {
      short: 0.8,     // <100 chars
      medium: 0.7,    // 100-120 chars  
      long: 0.6,      // 120-180 chars
      veryLong: 0.5   // >180 chars
    };
    
    let baseSize: number;
    if (textLength > 180) baseSize = baseSizes.veryLong;
    else if (textLength > 120) baseSize = baseSizes.long;
    else if (textLength > 100) baseSize = baseSizes.medium;
    else baseSize = baseSizes.short;
    
    return getScaledFontSize(baseSize, breakpoint);
  };

  // Responsive quote/star font sizes
  const getQuoteStarSize = (breakpoint: ResponsiveBreakpoint): string => {
    return getScaledFontSize(2.5, breakpoint); // 2.5rem desktop reference
  };

  // Responsive author font sizes  
  const getAuthorSize = (breakpoint: ResponsiveBreakpoint): string => {
    return getScaledFontSize(0.85, breakpoint); // 0.85rem desktop reference
  };

  const getAuthorTitleSize = (breakpoint: ResponsiveBreakpoint): string => {
    return getScaledFontSize(0.75, breakpoint); // 0.75rem desktop reference
  };

    // Responsive spacing/padding (simplified using utility)
  const getSpacing = (baseValue: number, breakpoint: ResponsiveBreakpoint): number => {
    return getScaledSpacing(baseValue, breakpoint);
  };

  // Pre-calculated responsive values for common spacing
  const cardPadding = createResponsiveValue(2.5);
  const elementMargin = createResponsiveValue(0.5);
  const textPaddingX = createResponsiveValue(1);
  const textPaddingY = createResponsiveValue(0.5);

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      {(title || subtitle) && (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          {title && (
            <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h6" sx={{ opacity: 0.9, color: 'white' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      
      <TestimonialContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id || index}
            className={testimonial.type === 'picture' ? 'picture-testimonial' : ''}
          >
            {testimonial.type === 'picture' ? (
              <Box sx={{ 
                position: 'relative', 
                height: '100%',
                backgroundImage: `url(${testimonial.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(30,58,138,0.7) 0%, rgba(59,130,246,0.5) 100%)',
                  zIndex: 1
                }} />
                <CardContent sx={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: { 
                    xl: getSpacing(2.5, 'xl'),
                    lg: getSpacing(2.5, 'lg'),
                    md: getSpacing(2.5, 'md'),
                    xs: getSpacing(2.5, 'xs')
                  },
                  minHeight: 0
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: { 
                      xl: getSpacing(0.5, 'xl'),
                      lg: getSpacing(0.5, 'lg'),
                      md: getSpacing(0.5, 'md'),
                      xs: getSpacing(0.5, 'xs')
                    }
                  }}>
                    <Typography variant="h4" sx={{ 
                      color: 'white',
                      fontSize: { 
                        xl: getQuoteStarSize('xl'),
                        lg: getQuoteStarSize('lg'),
                        md: getQuoteStarSize('md'),
                        xs: getQuoteStarSize('xs')
                      }
                    }}>
                      "
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    flex: '1 1 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { 
                      xl: getSpacing(0.5, 'xl'),
                      lg: getSpacing(0.5, 'lg'),
                      md: getSpacing(0.5, 'md'),
                      xs: getSpacing(0.5, 'xs')
                    },
                    minHeight: 0,
                    maxHeight: '150px',
                    overflowY: 'auto'
                  }}>
                    <Typography variant="body2" sx={{ 
                      fontStyle: 'italic', 
                      color: 'white',
                      textAlign: 'center',
                      fontSize: { 
                        xl: getTextFontSize(testimonial.text.length, 'xl'),
                        lg: getTextFontSize(testimonial.text.length, 'lg'),
                        md: getTextFontSize(testimonial.text.length, 'md'),
                        xs: getTextFontSize(testimonial.text.length, 'xs')
                      },
                      lineHeight: 1.4,
                      px: { 
                        xl: getSpacing(1, 'xl'),
                        lg: getSpacing(1, 'lg'),
                        md: getSpacing(1, 'md'),
                        xs: getSpacing(1, 'xs')
                      },
                      py: { 
                        xl: getSpacing(0.5, 'xl'),
                        lg: getSpacing(0.5, 'lg'),
                        md: getSpacing(0.5, 'md'),
                        xs: getSpacing(0.5, 'xs')
                      }
                    }}>
                      {testimonial.text}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    textAlign: 'center', 
                    px: { 
                      xl: getSpacing(1, 'xl'),
                      lg: getSpacing(1, 'lg'),
                      md: getSpacing(1, 'md'),
                      xs: getSpacing(1, 'xs')
                    },
                    flexShrink: 0,
                    minHeight: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 'bold', 
                      color: 'white',
                      display: 'block',
                      fontSize: { 
                        xl: getAuthorSize('xl'),
                        lg: getAuthorSize('lg'),
                        md: getAuthorSize('md'),
                        xs: getAuthorSize('xs')
                      }
                    }}>
                      {testimonial.author}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            ) : (
              <CardContent sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { 
                  xl: getSpacing(2.5, 'xl'),
                  lg: getSpacing(2.5, 'lg'),
                  md: getSpacing(2.5, 'md'),
                  xs: getSpacing(2.5, 'xs')
                },
                minHeight: 0
              }}>
                {testimonial.type === 'quote' && (
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: { 
                      xl: getSpacing(0.5, 'xl'),
                      lg: getSpacing(0.5, 'lg'),
                      md: getSpacing(0.5, 'md'),
                      xs: getSpacing(0.5, 'xs')
                    }
                  }}>
                    <Typography variant="h4" sx={{ 
                      color: '#333',
                      fontSize: { 
                        xl: getQuoteStarSize('xl'),
                        lg: getQuoteStarSize('lg'),
                        md: getQuoteStarSize('md'),
                        xs: getQuoteStarSize('xs')
                      }
                    }}>
                      "
                    </Typography>
                  </Box>
                )}
                
                {testimonial.type === 'star' && testimonial.rating && (
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: { 
                      xl: getSpacing(0.5, 'xl'),
                      lg: getSpacing(0.5, 'lg'),
                      md: getSpacing(0.5, 'md'),
                      xs: getSpacing(0.5, 'xs')
                    }
                  }}>
                    <Typography variant="h4" sx={{ 
                      color: '#ffc107',
                      fontSize: { 
                        xl: `${1.8 * 1.0}rem`,
                        lg: `${1.8 * 0.92}rem`,
                        md: `${1.8 * 0.83}rem`,
                        xs: `${1.8 * 0.75}rem`
                      }
                    }}>
                      {'★'.repeat(testimonial.rating)}
                    </Typography>
                  </Box>
                )}
                
                <Box sx={{ 
                  flex: '1 1 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: { 
                    xl: getSpacing(0.5, 'xl'),
                    lg: getSpacing(0.5, 'lg'),
                    md: getSpacing(0.5, 'md'),
                    xs: getSpacing(0.5, 'xs')
                  },
                  minHeight: 0,
                  maxHeight: '150px',
                  overflowY: 'auto'
                }}>
                  <Typography variant="body2" sx={{ 
                    fontStyle: testimonial.type === 'quote' ? 'italic' : 'normal',
                    textAlign: 'center',
                    fontSize: { 
                      xl: getTextFontSize(testimonial.text.length, 'xl'),
                      lg: getTextFontSize(testimonial.text.length, 'lg'),
                      md: getTextFontSize(testimonial.text.length, 'md'),
                      xs: getTextFontSize(testimonial.text.length, 'xs')
                    },
                    lineHeight: 1.4,
                    px: { 
                      xl: getSpacing(1, 'xl'),
                      lg: getSpacing(1, 'lg'),
                      md: getSpacing(1, 'md'),
                      xs: getSpacing(1, 'xs')
                    },
                    py: { 
                      xl: getSpacing(0.5, 'xl'),
                      lg: getSpacing(0.5, 'lg'),
                      md: getSpacing(0.5, 'md'),
                      xs: getSpacing(0.5, 'xs')
                    }
                  }}>
                    {testimonial.type === 'quote' ? `"${testimonial.text}"` : testimonial.text}
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  textAlign: 'center', 
                  px: { 
                    xl: getSpacing(1, 'xl'),
                    lg: getSpacing(1, 'lg'),
                    md: getSpacing(1, 'md'),
                    xs: getSpacing(1, 'xs')
                  },
                  flexShrink: 0,
                  minHeight: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 'bold', 
                    display: 'block',
                    fontSize: { 
                      xl: getAuthorSize('xl'),
                      lg: getAuthorSize('lg'),
                      md: getAuthorSize('md'),
                      xs: getAuthorSize('xs')
                    }
                  }}>
                    {testimonial.author}
                  </Typography>
                  {testimonial.authorTitle && (
                    <Typography variant="caption" sx={{ 
                      color: 'text.secondary', 
                      fontSize: { 
                        xl: getAuthorTitleSize('xl'),
                        lg: getAuthorTitleSize('lg'),
                        md: getAuthorTitleSize('md'),
                        xs: getAuthorTitleSize('xs')
                      },
                      display: 'block',
                      mt: { 
                        xl: getSpacing(0.5, 'xl'),
                        lg: getSpacing(0.5, 'lg'),
                        md: getSpacing(0.5, 'md'),
                        xs: getSpacing(0.5, 'xs')
                      }
                    }}>
                      {testimonial.authorTitle}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            )}
          </TestimonialCard>
        ))}
      </TestimonialContainer>
    </Box>
  );
};

export default TestimonialSection;
