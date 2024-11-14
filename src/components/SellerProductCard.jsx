import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
} from '@mui/material';
import { Edit2, Trash2 } from 'lucide-react';
import { useSellerStore } from '../store/sellerStore';
import { useNavigate } from 'react-router-dom';

export default function SellerProductCard({ product }) {
  const navigate = useNavigate();
  const deleteProduct = useSellerStore((state) => state.deleteProduct);

  const handleCardClick = () => {
    navigate(`/app/products/${product.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteProduct(product.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/app/seller/edit/${product.id}`);
  };

  return (
    <Card
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" noWrap sx={{ maxWidth: '70%' }}>
            {product.name}
          </Typography>
          <Box>
            <IconButton size="small" onClick={handleEdit}>
              <Edit2 size={18} />
            </IconButton>
            <IconButton size="small" color="error" onClick={handleDelete}>
              <Trash2 size={18} />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={`Stock: ${product.stock}`}
            color={product.stock > 0 ? 'success' : 'error'}
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
