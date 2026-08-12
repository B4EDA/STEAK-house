import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: '#0A0A0A',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}
          >
            Find Us
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 300, mb: 2 }}>
            Visit{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>Casa Bovina</Box>
          </Typography>
          <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1, mx: 'auto' }} />
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Map placeholder */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                bgcolor: 'rgba(26,18,8,0.6)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Stylized map grid */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Streets simulation */}
              <Box sx={{ position: 'absolute', top: '40%', left: 0, right: 0, height: '1px', bgcolor: 'rgba(201,168,76,0.15)' }} />
              <Box sx={{ position: 'absolute', top: '65%', left: 0, right: 0, height: '1px', bgcolor: 'rgba(201,168,76,0.1)' }} />
              <Box sx={{ position: 'absolute', left: '35%', top: 0, bottom: 0, width: '1px', bgcolor: 'rgba(201,168,76,0.15)' }} />
              <Box sx={{ position: 'absolute', left: '60%', top: 0, bottom: 0, width: '1px', bgcolor: 'rgba(201,168,76,0.1)' }} />

              {/* Location pin */}
              <Stack alignItems="center" spacing={1} sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)',
                    bgcolor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(139,26,26,0.5)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { boxShadow: '0 4px 20px rgba(139,26,26,0.5)' },
                      '50%': { boxShadow: '0 4px 30px rgba(139,26,26,0.8)' },
                      '100%': { boxShadow: '0 4px 20px rgba(139,26,26,0.5)' },
                    },
                  }}
                >
                  <LocationOnIcon sx={{ transform: 'rotate(45deg)', color: 'white', fontSize: 24 }} />
                </Box>
                <Box
                  sx={{
                    bgcolor: 'rgba(26,18,8,0.95)',
                    border: '1px solid rgba(201,168,76,0.4)',
                    px: 3,
                    py: 1.5,
                    textAlign: 'center',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em', display: 'block', fontSize: '0.65rem' }}>
                    CASA BOVINA
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontSize: '0.7rem' }}>
                    12 Rue Moulay Ismail, Agdal, Rabat
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 2 }}>
                  Address
                </Typography>
                <Stack direction="row" spacing={2}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 22, mt: 0.3, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    12 Rue Moulay Ismail<br />
                    Quartier Agdal<br />
                    Rabat 10090, Maroc
                  </Typography>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 2 }}>
                  Contact
                </Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      +212 537 68 44 20
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      info@casabovina.ma
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 2 }}>
                  Opening Hours
                </Typography>
                <Stack spacing={1}>
                  {[
                    { days: 'Monday – Thursday', hours: '12:00 – 23:00' },
                    { days: 'Friday – Saturday', hours: '12:00 – 00:30' },
                    { days: 'Sunday', hours: '12:00 – 23:00' },
                  ].map((row) => (
                    <Stack key={row.days} direction="row" justifyContent="space-between">
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>
                        {row.days}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontSize: '0.82rem', fontWeight: 600 }}>
                        {row.hours}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 2 }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: 'text.secondary',
                      borderRadius: 1,
                      '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                      transition: 'all 0.2s',
                    }}
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    sx={{
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: 'text.secondary',
                      borderRadius: 1,
                      '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                      transition: 'all 0.2s',
                    }}
                  >
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
