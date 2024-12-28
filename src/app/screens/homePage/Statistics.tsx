import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import Divider from '../../components/divider';

export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">12</Box>
            <Box className="static-text">Stylish Boutiques</Box>
          </Stack>

          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">8</Box>
            <Box className="static-text">Years of Fashion Expertise</Box>
          </Stack>

          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">50+</Box>
            <Box className="static-text">Curated Collections</Box>
          </Stack>

          <Divider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">200+</Box>
            <Box className="static-text">Unique Styles</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
