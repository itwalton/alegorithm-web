import { Box, Typography } from '@mui/material';
import { PiBeerSteinFill } from 'react-icons/pi';

export default function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      <PiBeerSteinFill size={40} color="#ffffff" />

      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          paddingTop: 1,
        }}
      >
        lagerithm.ai
      </Typography>
    </Box>
  );
}
