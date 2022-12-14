import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png"

const BodyPart = ({ item, setBodyPart, bodyPart, position }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "270px",
                cursor: "pointer",
                gap: "47px",
                borderTop: bodyPart === item ? "4px solid #ff2625": "",
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: `${position}`, left: "100", behavior: "smooth" })
            }}
        >
            <img src={Icon} alt="Dumbbell" style={{ width: "40px", height: "40px" }} />
            <Typography fontSize="24px" fontWeight="bold" color="#a1212" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
};

export default BodyPart;
