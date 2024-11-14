import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const StatsCard = ({ title, value, icon: Icon, color }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ p: 1, borderRadius: 1, bgcolor: `${color}15`, mr: 2 }}>
            <Icon size={24} color={color} />
          </Box>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}

export default StatsCard;