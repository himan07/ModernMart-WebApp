import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';
import { ShoppingBag, Clock, Heart, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const activities = [
  {
    title: 'Recent Orders',
    count: 5,
    icon: ShoppingBag,
    color: '#2196f3',
    action: '/app/orders',
  },
  {
    title: 'Pending Delivery',
    count: 2,
    icon: Clock,
    color: '#f50057',
    action: '/app/orders',
  },
  {
    title: 'Wishlist',
    count: 12,
    icon: Heart,
    color: '#00c853',
    action: '/app/products',
  },
  {
    title: 'Delivered',
    count: 8,
    icon: Truck,
    color: '#ff9100',
    action: '/app/orders',
  },
];

export default function BuyerDashboard() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 4 }}>
        Buyer Dashboard
      </Typography>
      <Grid container spacing={3}>
        {activities.map((activity) => (
          <Grid item xs={12} sm={6} md={3} key={activity.title}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      bgcolor: `${activity.color}15`,
                      mr: 2,
                    }}
                  >
                    <activity.icon
                      size={24}
                      color={activity.color}
                    />
                  </Box>
                  <Typography variant="h6">{activity.title}</Typography>
                </Box>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {activity.count}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate(activity.action)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}