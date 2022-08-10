import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ name, exerciseVideos }) => {

    if(!exerciseVideos.length) return (<Loader />)

    return (
        <Box sx= {{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
            <Typography variant="h4" mb="33px">
                Watch  <span style={{color: "#ff2625", textTransform: "capitalize"}}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
                flexDirection: { lg: "row" },
                gap: { lg: "110px", xs: "0" }
            }}>
                {exerciseVideos?.slice(0,3).map((video, index) => (
                    <a 
                        key={index}
                        className= "exercise-video"
                        href={`https://www.youtube.com/watch?v=${video.video.videoId}`} 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={video.video.thumbnails[0].url} alt={video.video.title} width="320px" height="180px" />
                        <Box>
                            <Typography variant="h5" color="#000">
                                {video.video.title.length > 25 ? video.video.title.substring(0,25) + "..." : video.video.title }
                            </Typography>
                            <Typography variant="h6" color="#000">
                                {video.video.channelName.length > 25 ? video.video.channelName.substring(0,25) + "..." : video.video.channelName }
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>

        </Box>
    )
};

export default ExerciseVideos;
