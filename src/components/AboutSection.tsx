import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const stats = [
  { icon: <LocalFireDepartmentIcon />, value: '15+', label: 'Years of Excellence' },
  { icon: <StarIcon />, value: '4.9', label: 'Average Rating' },
  { icon: <PeopleIcon />, value: '50k+', label: 'Happy Guests' },
  { icon: <EmojiEventsIcon />, value: '12', label: 'Awards Won' },
];

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background element */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: { xs: '60%', md: '40%' },
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,26,26,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Image side */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src="/interior.webp"
                alt="Casa Bovina Interior"
                sx={{
                  width: '100%',
                  height: { xs: 320, md: 500 },
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.9)',
                }}
              />
              {/* Gold border accent */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -16,
                  left: -16,
                  right: 16,
                  bottom: 16,
                  border: '1px solid rgba(201,168,76,0.4)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
              {/* Award badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(201,168,76,0.4)',
                }}
              >
                <Typography variant="h5" sx={{ color: '#0D0D0D', fontWeight: 700, lineHeight: 1 }}>
                  #1
                </Typography>
                <Typography variant="caption" sx={{ color: '#0D0D0D', fontSize: '0.55rem', letterSpacing: '0.08em', textAlign: 'center', px: 1 }}>
                  STEAKHOUSE IN RABAT
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Content side */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}
            >
              Our Story
            </Typography>

            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 3, fontWeight: 300 }}>
              A Legacy of Prime
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                Cuts & Passion
              </Box>
            </Typography>

            <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1, mb: 4 }} />

            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, mb: 3 }}>
              Founded in 2009 by Chef Karim El Mansouri, Casa Bovina was born from a vision to bring
              world-class steakhouse dining to the streets of Rabat. Nestled in the elegant Agdal
              district, our restaurant combines the warmth of Moroccan hospitality with the precision
              of international culinary arts.
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, mb: 6 }}>
              We source only the finest dry-aged beef from carefully selected farms across Morocco,
              Argentina, and Japan. Every cut is hand-selected, expertly seasoned, and grilled over
              authentic charcoal fire — delivering an experience that is nothing short of extraordinary.
            </Typography>

            {/* Stats grid */}
            <Grid container spacing={3}>
              {stats.map((stat) => (
                <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                  <Stack alignItems="center" spacing={0.5}>
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>{stat.icon}</Box>
                    <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.8rem' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.08em', textAlign: 'center', fontSize: '0.65rem' }}>
                      {stat.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
