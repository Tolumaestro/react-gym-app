import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import HorizontalScrollBar from "../components/HorizontalScrollBar"
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" }, px: { xs: "20px" } }}>
      <Typography variant="h3" mb={5}>
        Similar <span style={{ color: "#ff2625"}}>Target Muscle</span>  Exercises
      </Typography>
      <Stack direction="row" mb="100px"  sx={{ p: "2", position: "relative" }}>
        {
          targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />
        }
      </Stack>
      <Typography variant="h3" mb={5}>
        Similar <span style={{ color: "#ff2625"}}>Equipment</span> Exercises
      </Typography>
      <Stack direction="row" mb="100px" sx={{ p: "2", position: "relative" }}>
        {
          equipmentExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />
        }
      </Stack>
    </Box>
  )
};

export default SimilarExercises;
