import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, SvgIcon } from '@mui/material';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CustomIcon } from '../CustomIcon/CustomIcon';
import { StyledSelect } from './styled';

interface ICustomSelectProps {
    value: string;
    onChangeOption: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    options: ICurencyOption[]
}

interface ICurencyOption {
    currency: string, 
    price: number, 
    imageUrl: string
}

export const CustomSelect: React.FC<ICustomSelectProps> = ({value, onChangeOption, options}: ICustomSelectProps) => {
    console.log(options);
    
    return (
        <FormControl required sx={{ m: 0.5, width: 150 }}>
            <StyledSelect
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={value}
                // label="Age *"
                onChange={onChangeOption}
                sx={{borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}
            >
                {
                    options.map(({currency, price, imageUrl}: ICurencyOption) => {
                        return (
                            <MenuItem value={price} key={uuidv4()}>
                                <CustomIcon imageUrl={imageUrl} />
                                {currency}
                            </MenuItem>
                        )
                    })
                }
            </StyledSelect>
      </FormControl>
    )
}