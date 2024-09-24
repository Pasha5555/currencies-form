import React from "react";
import { Box, CircularProgress } from "@mui/material"

export const Loader: React.FC = () => {
    return (
        <Box 
            position={'absolute'}
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
        >
            <CircularProgress 
                size={60}
                thickness={2}
                value={100}
            />
        </Box>
    )
};
