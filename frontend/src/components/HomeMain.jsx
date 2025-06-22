import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const exampleCompanies = [
  { name: 'Coastal Corp', symbol: 'COASTCORP' },
  { name: 'Frontier Springs', symbol: '522195' },
  { name: 'ITD Cem', symbol: 'ITDCEM' },
  { name: 'Krishca Strapp.', symbol: 'KRISHCA' },
  { name: 'Modison', symbol: 'MODISONLTD' },
];

export default function HomeMain() {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Stock analysis and screening tool for investors in India.
      </Typography>
      <TextField
        label="Search for companies"
        variant="outlined"
        sx={{ width: 350, mt: 3 }}
      />
      <Typography variant="subtitle1" sx={{ mt: 4 }}>
        Or analyse:
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
        {exampleCompanies.map((c) => (
          <Link key={c.symbol} href={`#`} underline="hover">
            {c.name}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
