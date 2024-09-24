import { Select, styled } from "@mui/material";



export const StyledSelect = styled(Select)({
    '& .MuiInputBase-root': {
        borderTopRightRadius: '10px !important', 
        borderBottomRightRadius: '10px'
    },
    '& .MuiSelect-select': {
        display: 'flex',
        
    }
});