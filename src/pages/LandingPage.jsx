import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import { ShoppingBag } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ShoppingBag size={80} color="white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            mt: 2,
          }}
        >
          ModernMart
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            mt: 1,
          }}
        >
          Your Premium Shopping Destination
        </Typography>
      </motion.div>
    </Container>
  );
}