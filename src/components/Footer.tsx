import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#070707',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src="/logo.webp"
              alt="Casa Bovina"
              sx={{ height: 56, mb: 3, filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.3))' }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 2, maxWidth: 280, fontSize: '0.83rem' }}>
              Rabat's premier steakhouse since 2009. We are dedicated to serving the finest
              cuts of premium beef with unmatched hospitality.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 3 }}
            >
              Navigation
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.map((link) => (
                <Typography
                  key={link.label}
                  variant="body2"
                  onClick={() => handleNav(link.href)}
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 3 }}
            >
              Hours
            </Typography>
            <Stack spacing={1}>
              {[
                { days: 'Mon – Thu', hours: '12:00 – 23:00' },
                { days: 'Fri – Sat', hours: '12:00 – 00:30' },
                { days: 'Sunday', hours: '12:00 – 23:00' },
              ].map((row) => (
                <Stack key={row.days} direction="row" justifyContent="space-between" spacing={2}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
                    {row.days}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.light', fontSize: '0.78rem' }}>
                    {row.hours}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: '0.2em', fontSize: '0.65rem', display: 'block', mb: 3 }}
            >
              Address
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 2, fontSize: '0.82rem' }}>
              12 Rue Moulay Ismail<br />
              Quartier Agdal<br />
              Rabat 10090, Maroc<br />
              <br />
              +212 537 68 44 20<br />
              info@casabovina.ma
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'center' }}
          spacing={2}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.6, fontSize: '0.7rem' }}>
            © {new Date().getFullYear()} Casa Bovina. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.6, fontSize: '0.7rem' }}>
            Prime Steakhouse & Grill — Agdal, Rabat, Maroc
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
