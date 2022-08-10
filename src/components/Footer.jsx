import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" pt="24px" px= {3}>
        <Stack direction="row" alignItems="center" gap="20px">
          <img  src={Logo} alt="logo" width= "96px" height= "96px" />
          <Typography position="relative"  top="20px" color= "#ff2625" fontWeight="bold" variant="h5">
            Maestro's Gym
          </Typography>
        </Stack>
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ✨ by Maestro Dev &copy; 2022.
        </Typography>
      </Stack>

    </Box>
  )
};

export default Footer;
