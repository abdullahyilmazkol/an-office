import React, { useState } from 'react';
import {
  TextField,
  Button,
} from '@mui/material';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Mesajınız başarıyla gönderildi!');
    onClose(); // Form gönderildikten sonra pencereyi kapat
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="İsim"
        name="name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="E-posta"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Konu"
        name="subject"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <TextField
        label="Mesaj"
        name="message"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Gönder
      </Button>
    </form>
  );
};

export default ContactForm;
