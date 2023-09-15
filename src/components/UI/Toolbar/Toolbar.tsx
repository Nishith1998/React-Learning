import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  { AnalyticsOutlined } from '@mui/icons-material';

export default function Toolbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MuiToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AnalyticsOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Form
          </Typography>
          {/* <Button color="inherit">Form</Button> */}
        </MuiToolbar>
      </AppBar>
    </Box>
  );
}