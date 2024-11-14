import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Rating,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { products } from '../data/products';
import { useSellerStore } from '../store/sellerStore';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addItem);
  const sellerProducts = useSellerStore((state) => state.products);
  
  const product = [...products, ...sellerProducts].find((p) => p.id === id);

  if (!product) {
    return (
      <Container>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" gutterBottom>Product not found</Typography>
          <Button
            startIcon={<ArrowLeft />}
            onClick={() => navigate('/app/products')}
          >
            Back to Products
          </Button>
        </Box>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <Container maxWidth="lg">
      <Button
        startIcon={<ArrowLeft />}
        onClick={() => navigate('/app/products')}
        sx={{ mb: 4 }}
      >
        Back to Products
      </Button>
      
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} readOnly precision={0.5} size="large" />
              <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                ({product.rating} rating)
              </Typography>
            </Box>
            <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
              ${product.price.toFixed(2)}
            </Typography>
            {'stock' in product && (
              <Chip
                label={`${product.stock} in stock`}
                color={product.stock > 0 ? 'success' : 'error'}
                sx={{ mb: 2 }}
                size="large"
              />
            )}
            <Divider sx={{ my: 3 }} />
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              {product.description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
              onClick={handleAddToCart}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}