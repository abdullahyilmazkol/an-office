import React, { useState } from 'react';
import {
  Container,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContactInfo from '../Components/ContactInfo';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

const styles = {
  background: {
    backgroundImage: 'url(http://www.anilbicer.com/wp-content/uploads/2014/08/01-copy-copy-1.jpg)', // Arka plan resmi yolu
    backgroundSize: 'cover', // 'contain' veya 'cover' seçeneğini kullanın
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom',
    width: 'auto',
    height:'176px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
};

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true); // Pencereyi aç
  };

  const handleClose = () => {
    setOpen(false); // Pencereyi kapat
  };

  return (
    <>
    <div style={styles.background}>
    </div>
    <Container maxWidth="lg" sx={{  mb: 5 }}>




          <ContactInfo />
 

      {/* Yüzen İletişim Formu Butonu */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>

      {/* İletişim Formu Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>İletişim Formu</DialogTitle>
        <DialogContent>
          <ContactForm onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    <Footer/>
    </>
  );
};

export default Contact;
