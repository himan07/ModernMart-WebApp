import React, { Suspense } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Tab,
  Tabs,
} from '@mui/material';
import { BarChart, Package, DollarSign, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import LoadingSpinner from '../components/LoadingSpinner';

const SellerProducts = React.lazy(() => import('../components/SellerProducts'));
const AddProductForm = React.lazy(() => import('../components/AddProductForm'));

const stats = [
  {
    title: 'Total Sales',
    value: '$12,456',
    icon: DollarSign,
    color: '#2196f3',
  },
  {
    title: 'Products',
    value: '45',
    icon: Package,
    color: '#f50057',
  },
  {
    title: 'Revenue',
    value: '$3,456',
    icon: BarChart,
    color: '#00c853',
  },
  {
    title: 'Customers',
    value: '290',
    icon: Users,
    color: '#ff9100',
  },
];

export default function SellerDashboard() {
  const [tab, setTab] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Seller Dashboard</Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={() => setTab(1)}
        >
          Add New Product
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatsCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent>
          <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)} sx={{ mb: 3 }}>
            <Tab label="My Products" />
            <Tab label="Add Product" />
          </Tabs>

          <Suspense fallback={<LoadingSpinner />}>
            {tab === 0 ? <SellerProducts /> : <AddProductForm onSuccess={() => setTab(0)} />}
          </Suspense>
        </CardContent>
      </Card>
    </Container>
  );
}