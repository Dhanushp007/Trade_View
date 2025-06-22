import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box sx={{ mt: 8, mb: 2, textAlign: 'center', color: 'grey.600' }}>
      <Typography variant="body2">
        Trade View © {new Date().getFullYear()} | Made with ❤️ in India.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="#" underline="hover" sx={{ mx: 1 }}>Terms</Link>
        <Link href="#" underline="hover" sx={{ mx: 1 }}>Privacy</Link>
        <Link href="#" underline="hover" sx={{ mx: 1 }}>About</Link>
        <Link href="#" underline="hover" sx={{ mx: 1 }}>Support</Link>
      </Box>
    </Box>
  );
}
