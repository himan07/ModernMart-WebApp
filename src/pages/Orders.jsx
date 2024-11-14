import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Chip,
} from '@mui/material';

const orders = [
  {
    id: '1',
    date: '2024-03-15',
    status: 'Delivered',
    total: 299.99,
    items: [
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        quantity: 1,
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: '2',
        name: 'Smart Watch Pro',
        quantity: 1,
        price: 100.00,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export default function Orders() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 4 }}>
        My Orders
      </Typography>
      {orders.map((order) => (
        <Card key={order.id} sx={{ mb: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Order #{order.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </Typography>
              </Box>
              <Box>
                <Chip
                  label={order.status}
                  color="success"
                  variant="outlined"
                />
                <Typography
                  variant="h6"
                  sx={{ mt: 1 }}
                >
                  ${order.total.toFixed(2)}
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={2}>
              {order.items.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: 'cover',
                        borderRadius: 8,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Quantity: {item.quantity}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}