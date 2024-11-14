import React from 'react';
import {
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { useSellerStore } from '../store/sellerStore';
import SellerProductCard from './SellerProductCard';

export default function SellerProducts() {
  const products = useSellerStore((state) => state.products);

  if (products.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No products added yet. Start by adding your first product!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <SellerProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}