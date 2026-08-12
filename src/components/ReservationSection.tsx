import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    color: 'text.primary',
    '& fieldset': { borderColor: 'rgba(201,168,76,0.3)' },
    '&:hover fieldset': { borderColor: 'rgba(201,168,76,0.6)' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
  '& .MuiInputLabel-root': { color: 'text.secondary', '&.Mui-focused': { color: 'primary.main' } },
};

export default function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      id="reservation"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-steak.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.15) saturate(0.5)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.8) 50%, rgba(13,13,13,0.95) 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* Left info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}
            >
              Make a Reservation
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 300, mb: 2 }}>
              Reserve Your
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                Experience
              </Box>
            </Typography>
            <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1, mb: 4 }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, mb: 5 }}>
              Secure your table at Rabat's finest steakhouse. For parties of 10 or more,
              please contact us directly.
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    border: '1px solid rgba(201,168,76,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', fontSize: '0.65rem' }}>
                    PHONE
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    +212 537 68 44 20
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    border: '1px solid rgba(201,168,76,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', fontSize: '0.65rem' }}>
                    EMAIL
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    reservations@casabovina.ma
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    border: '1px solid rgba(201,168,76,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em', display: 'block', fontSize: '0.65rem' }}>
                    HOURS
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Mon–Thu: 12:00 – 23:00
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Fri–Sun: 12:00 – 00:00
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Reservation Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                bgcolor: 'rgba(26,18,8,0.8)',
                border: '1px solid rgba(201,168,76,0.15)',
                p: { xs: 3, md: 5 },
                backdropFilter: 'blur(8px)',
              }}
            >
              {submitted ? (
                <Alert
                  severity="success"
                  sx={{
                    bgcolor: 'rgba(46,125,50,0.15)',
                    border: '1px solid rgba(46,125,50,0.3)',
                    color: 'success.light',
                    '& .MuiAlert-icon': { color: 'success.light' },
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>Reservation Confirmed!</Typography>
                  <Typography variant="body2">
                    Thank you, {form.firstName}. We have received your reservation request and will
                    confirm via email at {form.email} within 2 hours.
                  </Typography>
                </Alert>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="First Name"
                        required
                        value={form.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        required
                        value={form.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        required
                        InputLabelProps={{ shrink: true }}
                        value={form.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <FormControl fullWidth sx={fieldSx}>
                        <InputLabel>Time</InputLabel>
                        <Select
                          label="Time"
                          required
                          value={form.time}
                          onChange={(e) => handleChange('time', e.target.value)}
                          MenuProps={{ PaperProps: { sx: { bgcolor: 'background.paper' } } }}
                        >
                          {['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(
                            (t) => <MenuItem key={t} value={t}>{t}</MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <FormControl fullWidth sx={fieldSx}>
                        <InputLabel>Guests</InputLabel>
                        <Select
                          label="Guests"
                          required
                          value={form.guests}
                          onChange={(e) => handleChange('guests', e.target.value)}
                          MenuProps={{ PaperProps: { sx: { bgcolor: 'background.paper' } } }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                            <MenuItem key={n} value={String(n)}>{n} {n === 1 ? 'Guest' : 'Guests'}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Special Requests"
                        multiline
                        rows={3}
                        value={form.notes}
                        onChange={(e) => handleChange('notes', e.target.value)}
                        placeholder="Dietary requirements, allergies, special occasions..."
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        sx={{ py: 1.8, fontSize: '0.8rem' }}
                      >
                        Confirm Reservation
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
