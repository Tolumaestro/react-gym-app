import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [ bodyPart, setBodyPart ] = useState("all");
  const [ exercises, setExercises ] = useState([]);
  const [ position, setPosition ] = useState(0)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} position={position} setPosition={setPosition} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} position={position} setPosition={setPosition} />
    </Box>
  )
};

export default Home;
