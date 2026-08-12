import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Stack from '@mui/material/Stack';

const categories = ['All', 'Steaks', 'Starters', 'Sides', 'Desserts'];

const menuItems = [
  {
    name: 'Tomahawk Wagyu',
    description: 'A5 Japanese Wagyu, 1.2kg bone-in, served with truffle butter and roasted garlic',
    price: '620 MAD',
    category: 'Steaks',
    image: '/steak-wagyu.webp',
    badge: 'Signature',
  },
  {
    name: 'Dry-Aged Ribeye',
    description: '45-day dry-aged prime Angus, 400g, grilled to perfection with herb compound butter',
    price: '280 MAD',
    category: 'Steaks',
    image: '/steak-ribeye.webp',
    badge: 'Best Seller',
  },
  {
    name: 'Filet Mignon',
    description: 'Tender centre-cut fillet, 220g, with black truffle sauce and haricots verts',
    price: '260 MAD',
    category: 'Steaks',
    image: '/steak-filet.webp',
    badge: null,
  },
  {
    name: 'Bone-In Striploin',
    description: 'Heritage breed 350g prime striploin, chimichurri & red wine reduction',
    price: '230 MAD',
    category: 'Steaks',
    image: '/steak-ribeye.webp',
    badge: null,
  },
  {
    name: 'Burrata & Tomato',
    description: 'Fresh Italian burrata, heirloom tomatoes, basil oil, aged balsamic, sea salt',
    price: '80 MAD',
    category: 'Starters',
    image: '/salad.webp',
    badge: null,
  },
  {
    name: 'Beef Tartare',
    description: 'Hand-cut prime fillet, capers, cornichons, Dijon mustard, quail egg, crostini',
    price: '95 MAD',
    category: 'Starters',
    image: '/salad.webp',
    badge: null,
  },
  {
    name: 'Caesar Salad',
    description: 'Romaine hearts, house-made Caesar dressing, anchovies, Parmigiano Reggiano',
    price: '70 MAD',
    category: 'Starters',
    image: '/salad.webp',
    badge: null,
  },
  {
    name: 'Truffle Mac & Cheese',
    description: 'Creamy four-cheese sauce, black truffle shavings, crispy breadcrumb crust',
    price: '75 MAD',
    category: 'Sides',
    image: '/salad.webp',
    badge: null,
  },
  {
    name: 'Hand-Cut Fries',
    description: 'Double-cooked Moroccan potatoes with smoked paprika aioli',
    price: '45 MAD',
    category: 'Sides',
    image: '/salad.webp',
    badge: null,
  },
  {
    name: 'Chocolate Fondant',
    description: 'Warm 70% dark chocolate lava cake, Tahitian vanilla ice cream, gold flake',
    price: '75 MAD',
    category: 'Desserts',
    image: '/salad.webp',
    badge: null,
  },
  {
    name: 'Crème Brûlée',
    description: 'Classic Tahitian vanilla, caramelized sugar crust, fresh seasonal berries',
    price: '60 MAD',
    category: 'Desserts',
    image: '/salad.webp',
    badge: null,
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <Box
      id="menu"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#0A0A0A',
        position: 'relative',
      }}
    >
      {/* Subtle texture pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(201,168,76,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}
          >
            Culinary Excellence
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 300, mb: 2 }}>
            Our Signature{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>Menu</Box>
          </Typography>
          <Divider sx={{ width: 60, borderColor: 'primary.main', borderWidth: 1, mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', lineHeight: 2 }}>
            Every dish is crafted with the finest ingredients and the passion of our
            master chefs. All prices exclude taxes.
          </Typography>
        </Box>

        {/* Category Filter */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <ToggleButtonGroup
            value={activeCategory}
            exclusive
            onChange={(_, val) => val && setActiveCategory(val)}
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              '& .MuiToggleButton-root': {
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '2px !important',
                color: 'text.secondary',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                px: 3,
                py: 1,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: '#0D0D0D',
                  borderColor: 'primary.main',
                  fontWeight: 700,
                  '&:hover': { bgcolor: 'primary.light' },
                },
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              },
            }}
          >
            {categories.map((cat) => (
              <ToggleButton key={cat} value={cat}>
                {cat}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Menu Items Grid */}
        <Grid container spacing={3}>
          {filtered.map((item) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                    '& .menu-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {item.badge && (
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      zIndex: 2,
                      bgcolor: 'primary.main',
                      color: '#0D0D0D',
                      fontWeight: 700,
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                    }}
                  />
                )}
                <Box sx={{ overflow: 'hidden', height: 200 }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    className="menu-image"
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      filter: 'brightness(0.85)',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.3, flex: 1, pr: 1 }}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: 'primary.main', fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap' }}
                    >
                      {item.price}
                    </Typography>
                  </Stack>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.82rem' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
