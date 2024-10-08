import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <Box>
      <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="bold" fontSize="25px" color="primary">
          Sociopedia
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to Sociopedia, the Social Media for Sociopedia
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
