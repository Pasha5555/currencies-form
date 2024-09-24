import React from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Box
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface IModalDialogProps {
    title: string;
    text: string;
    onClose: () => void
}

export const ModalDialog: React.FC<IModalDialogProps> = ({title, text, onClose}: IModalDialogProps) => {
    return (
        <div>
            <Dialog open={true} onClose={onClose} sx={{ '& .MuiDialog-paper': { backgroundColor: '#e0f7fa' } }}>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', color: '#00796b' }}>
                    <CheckCircleIcon sx={{ marginRight: 1 }} />
                    {title}
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            {text}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
