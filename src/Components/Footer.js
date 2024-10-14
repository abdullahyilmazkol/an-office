import { Box, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'grey.900',
      color: 'white',
      py: 3,
      px: 2,
      mt: 4,
    }}
  >
    {/* Sosyal Medya Bağlantıları */}
    <Typography variant="h6" gutterBottom>
      Sosyal Medya
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <IconButton
        component={Link}
        href="https://facebook.com"
        target="_blank"
        rel="noopener"
        sx={{ color: 'white' }}
      >
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton
        component={Link}
        href="https://instagram.com"
        target="_blank"
        rel="noopener"
        sx={{ color: 'white' }}
      >
        <Instagram fontSize="large" />
      </IconButton>
      <IconButton
        component={Link}
        href="https://linkedin.com"
        target="_blank"
        rel="noopener"
        sx={{ color: 'white' }}
      >
        <LinkedIn fontSize="large" />
      </IconButton>
    </Box>

    {/* Footer Genel Bilgiler */}
    <Typography variant="body2" align="center" sx={{ mb: 1 }}>
      © {new Date().getFullYear()} Anoffice. Tüm hakları saklıdır.
    </Typography>

  </Box>
);

export default Footer;
