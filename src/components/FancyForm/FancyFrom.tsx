import { Box, FormControl, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledButton, StyledCard, StyledSwapVertSharpIcon, StyledTextField } from "./styled";
import CurrencyBitcoinSharpIcon from '@mui/icons-material/CurrencyBitcoinSharp';
import { CustomSelect } from "../common/CustomSelect/CustomSelect";
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { getCurrencies } from "../../utils/utils";
import { useFormData } from "../../hooks/useFormData";
import { Loader } from "../common/Loader/Loader";
import { ModalDialog } from "../common/ModalDialog/ModalDialog";

export const FancyFrom: React.FC = () => {
    const [formData, receivedValue, error, handleInputChange, handleDropdownChange, handleCurrenciesSwitch] = useFormData();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const onFormSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsOpenModal(true);
        }, 2000)
    };

    if (isLoading) return <Loader />;

    return (
        <>
            {
                isOpenModal
                    ? <ModalDialog 
                        title={"Success"} 
                        text={"Your operation was successful! Have a nice day!."}
                        onClose={() => setIsOpenModal(false)}
                    />
                    : <StyledCard>
                    <FormControl sx={{ borderRadius: '10px', padding: '30px'}}>
                        <Typography 
                            variant="h5" 
                            sx={{m: '10px auto 50px auto'}}
                        >
                            Currency Exchange 
                            <CurrencyExchangeOutlinedIcon color='primary' fontSize='large' sx={{ml: 1}}/>
                        </Typography>
                        <Box>
                            <StyledTextField 
                                id="outlined-basic" 
                                label="You send" 
                                placeholder='Type value...'
                                value={formData.sendValue} 
                                onChange={handleInputChange}
                                error={!!error}
                                helperText={error ? error : ""}
                            />
                            <CustomSelect
                                options={getCurrencies()}
                                value={formData.currencyFromPrice} 
                                onChangeOption={(e) => handleDropdownChange(e, 'currencyFromPrice')} 
                            />
                        </Box>
                        <StyledSwapVertSharpIcon color="primary" fontSize="large" onClick={() => handleCurrenciesSwitch()} />
                        <Box>
                            <StyledTextField 
                                id="outlined-basic" 
                                label="You receive" 
                                placeholder='Type value...'
                                value={receivedValue} 
                                disabled
                            />
                            <CustomSelect 
                                options={getCurrencies()}
                                value={formData.currencyToPrice} 
                                onChangeOption={(e) => handleDropdownChange(e, 'currencyToPrice')} 
                            />
                        </Box>
                        <StyledButton 
                            variant="contained" 
                            endIcon={<CurrencyBitcoinSharpIcon />} 
                            size='large'
                            onClick={onFormSubmit}
                            disabled={!!error}
                        >
                            Confirm swap
                        </StyledButton>
                    </FormControl>
                </StyledCard>
            }
        </>
    );
}
