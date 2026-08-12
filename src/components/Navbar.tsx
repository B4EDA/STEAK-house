import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(13, 13, 13, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.2)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, md: 6 } }}>
          <Box
            component="img"
            src="/logo.webp"
            alt="Casa Bovina"
            sx={{ height: { xs: 48, md: 60 }, cursor: 'pointer', filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.4))' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  sx={{
                    color: 'text.primary',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s',
                    px: 2,
                    py: 0,
                    minWidth: 'auto',
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleNav('#reservation')}
                sx={{ ml: 2, fontSize: '0.7rem', py: 1, px: 3 }}
              >
                Reserve a Table
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'primary.main' }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'background.paper',
            borderLeft: '1px solid rgba(201,168,76,0.2)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box component="img" src="/logo.webp" alt="Casa Bovina" sx={{ height: 44 }} />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'primary.main' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton onClick={() => handleNav(link.href)}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: { letterSpacing: '0.15em', fontSize: '0.85rem', color: 'text.primary' },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleNav('#reservation')}
            >
              Reserve a Table
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
