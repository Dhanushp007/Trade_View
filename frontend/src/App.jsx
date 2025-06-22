import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StockChart from './components/StockChart';
import HomeMain from './components/HomeMain';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function Screens() {
  return <p>Screens page coming soon!</p>;
}
function Login() {
  return <p>Login page coming soon!</p>;
}

export default function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(() => createTheme({
    palette: { mode },
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout mode={mode} toggleColorMode={colorMode.toggleColorMode} /> }>
            <Route index element={<HomeMain />} />
            <Route path="chart" element={<StockChart />} />
            <Route path="screens" element={<Screens />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
