import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-steak.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          animation: 'slowZoom 20s ease-in-out infinite alternate',
          '@keyframes slowZoom': {
            '0%': { transform: 'scale(1.05)' },
            '100%': { transform: 'scale(1.12)' },
          },
        }}
      />

      {/* Dark overlay with gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(26,18,8,0.7) 50%, rgba(13,13,13,0.9) 100%)',
        }}
      />

      {/* Ember particles effect overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 70% 60%, rgba(139,26,26,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 12 }}>
        <Box sx={{ maxWidth: 700 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              display: 'block',
              mb: 3,
              animation: 'fadeSlideUp 0.8s ease forwards',
              '@keyframes fadeSlideUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Est. 2009 — Rabat, Maroc
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
              fontWeight: 200,
              lineHeight: 1.1,
              color: 'text.primary',
              mb: 2,
              animation: 'fadeSlideUp 0.8s ease 0.2s forwards',
              opacity: 0,
              '@keyframes fadeSlideUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Casa
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 600, display: 'block' }}>
              Bovina
            </Box>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1 }} />
            <Typography
              variant="overline"
              sx={{
                color: 'text.secondary',
                letterSpacing: '0.25em',
                fontSize: '0.65rem',
                animation: 'fadeSlideUp 0.8s ease 0.4s forwards',
                opacity: 0,
                '@keyframes fadeSlideUp': {
                  from: { opacity: 0, transform: 'translateY(20px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Prime Steakhouse & Grill
            </Typography>
            <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1 }} />
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 520,
              lineHeight: 1.9,
              mb: 5,
              fontSize: '1.05rem',
              animation: 'fadeSlideUp 0.8s ease 0.6s forwards',
              opacity: 0,
              '@keyframes fadeSlideUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Experience the finest cuts of premium aged beef, expertly grilled over
            charcoal fire in the heart of Rabat. Where Moroccan warmth meets
            international culinary excellence.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              animation: 'fadeSlideUp 0.8s ease 0.8s forwards',
              opacity: 0,
              '@keyframes fadeSlideUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => handleScroll('#reservation')}
              sx={{ fontSize: '0.75rem' }}
            >
              Reserve Your Table
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => handleScroll('#menu')}
              sx={{ fontSize: '0.75rem' }}
            >
              Explore Our Menu
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
        onClick={() => handleScroll('#about')}
      >
        <Typography variant="caption" sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.6rem' }}>
          SCROLL
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: 'primary.main', fontSize: 20 }} />
      </Box>
    </Box>
  );
}
