import React from 'react';
import { SvgIcon } from '@mui/material';

interface ICustomIconProps {
    imageUrl: string
}

export const CustomIcon: React.FC<ICustomIconProps> = ({imageUrl}: ICustomIconProps) => {
    return (
        <SvgIcon sx={{mr: 1}}>
            <image href={imageUrl} width="24" height="24" />
        </SvgIcon>
    )
};
