import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // react-router-dom'dan Link bileşenini içe aktarın.

const drawerWidth = 240;
const navItems = ['About', 'Projects', 'Awards', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginTop: 5 }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ marginTop: 1 }}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box component="div" sx={{ flexGrow: 1,  display: 'flex', alignItems: 'center', height: '64px', marginTop: '-40px'  }}>
  <Link to="/" style={{ textDecoration: 'none' }}>
    <img 
      src="https://lh3.googleusercontent.com/proxy/FTTXMZPwwCc70LpyLyuiiGILTBncUk9CwRKeJohFdNXQ2HrG3H38PHSWzHMNK7W2e7If1cUICPqOUYv-ZfJ6cZ0lsrqV0RRM_zFKW8cdOcLxiDOBiy5YkEwoF3O_N4aT-71FdA" 
      alt="Anoffice Logo" 
      style={{ maxWidth: '150px', height: 'auto', cursor: 'pointer' }} 
    />
  </Link>
</Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} component={Link} to={`/${item.toLowerCase()}`}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'rgb(255, 255, 255)', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
