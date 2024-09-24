import { Button, Card, styled, TextField } from "@mui/material";
import SwapVertSharpIcon from '@mui/icons-material/SwapVertSharp';

export const StyledTextField = styled(TextField)({
    '&.MuiFormControl-root': {
        width: 250,
        marginTop: '4px',
        marginLeft: '5px'
    },
    '& .MuiInputBase-root': {
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    }
});

export const StyledCard = styled(Card)({
    '&.MuiPaper-root': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        height: '470px',
        width: 'max-content',
        borderRadius: '50px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0 3px 8px'
    }
});

export const StyledSwapVertSharpIcon = styled(SwapVertSharpIcon)({
    '&.MuiSvgIcon-root': {
        margin: '3px auto', 
        cursor: 'pointer',
        transition: 'all .2s'
    },
    '&.MuiSvgIcon-root:hover': {
        background: '#efefef !important',
        borderRadius: '10px',
    }
});

export const StyledButton = styled(Button)({
    width: 300, 
    margin: 'auto', 
    marginTop: '40px', 
    borderRadius: '10px'
});
