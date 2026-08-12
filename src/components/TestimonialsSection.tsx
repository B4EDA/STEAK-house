import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Youssef Alami',
    role: 'Food Critic, Maroc Gourmand',
    rating: 5,
    text: 'Casa Bovina is, without question, the finest steakhouse in all of Morocco. The Wagyu Tomahawk is an experience I will remember for years — perfectly charred, impossibly tender, with a depth of flavor that only master-level grilling can achieve.',
    initials: 'YA',
  },
  {
    name: 'Sophie Leclerc',
    role: 'Travel Blogger, Paris',
    rating: 5,
    text: 'I have dined at Michelin-starred restaurants across Europe, and Casa Bovina stands proudly among the best. The service is impeccable, the ambiance is stunning, and the dry-aged ribeye is flawless. Rabat has a gem here.',
    initials: 'SL',
  },
  {
    name: 'Omar Benjelloun',
    role: 'Entrepreneur, Casablanca',
    rating: 5,
    text: 'Every business dinner I host is at Casa Bovina. Chef El Mansouri consistently delivers perfection. The wine selection is extraordinary, the staff remembers our preferences, and the food never disappoints. Simply the best.',
    initials: 'OB',
  },
  {
    name: 'Amina El Fassi',
    role: 'Chef & Culinary Instructor',
    rating: 5,
    text: 'As a chef myself, I am extremely critical of technique. Casa Bovina is technically flawless — precise cooking temperatures, beautiful presentation, and the use of quality ingredients. A true celebration of the craft.',
    initials: 'AE',
  },
  {
    name: 'James Harrison',
    role: 'Business Traveler, London',
    rating: 5,
    text: 'I visit Rabat four times a year and never miss a dinner here. The filet mignon with truffle sauce is arguably the best steak I have had globally. Booking is essential — it fills up every single night.',
    initials: 'JH',
  },
  {
    name: 'Fatima Zouaoui',
    role: 'Wedding Planner, Rabat',
    rating: 5,
    text: 'I have organized private events at Casa Bovina for my clients, and they always exceed expectations. The private dining room is beautiful, the customized menus are exceptional, and the team is professional beyond words.',
    initials: 'FZ',
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#0D0D0D',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(139,26,26,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}
          >
            Guest Reviews
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 300, mb: 2 }}>
            What Our Guests{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>Say</Box>
          </Typography>
          <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1, mx: 'auto' }} />
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={t.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(201,168,76,0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <FormatQuoteIcon
                    sx={{ color: 'primary.main', fontSize: 36, mb: 2, opacity: 0.8 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.85, flexGrow: 1, mb: 3, fontStyle: 'italic', fontSize: '0.875rem' }}
                  >
                    {t.text}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        width: 46,
                        height: 46,
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9rem' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
                        {t.role}
                      </Typography>
                    </Box>
                    <Rating
                      value={t.rating}
                      readOnly
                      size="small"
                      sx={{ '& .MuiRating-iconFilled': { color: 'primary.main' }, flexShrink: 0 }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
