import { SelectChangeEvent } from "@mui/material";
import { ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { getCurrencies } from "../utils/utils";
import { getNumericValidateMessage } from "../utils/utils";

interface IFormDataState {
    sendValue: string;
    currencyFromPrice: string;
    currencyToPrice: string;
}

type FormData = [
    IFormDataState, 
    string, 
    string, 
    ChangeEventHandler<HTMLInputElement>, 
    (event: SelectChangeEvent<unknown>, name: string) => void,
    () => void
]

const currencies = getCurrencies();

export const useFormData = (): FormData => {
    const [formData, setFormData] = useState<IFormDataState>({
        sendValue: '0.1',
        currencyFromPrice: currencies[5].price.toString(),
        currencyToPrice: currencies[2].price.toString(),
    });
    const [error, setError] = useState<string>('');

    const receivedValue = useMemo(() => {
        const { sendValue, currencyFromPrice, currencyToPrice } = formData;
        if (error) return '';

        return (parseFloat(sendValue) * (parseFloat(currencyFromPrice) / parseFloat(currencyToPrice))).toString() || '';
    }, [formData, error]);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const errorMessage = getNumericValidateMessage(value);

        setError(errorMessage);
        if (/^-?\d*\.?\d*$/.test(value)) {
            setFormData(prev => ({ ...prev, sendValue: value === "" ? "" : value }));
        }
    }, []);

    const handleDropdownChange = useCallback((event: SelectChangeEvent<unknown>, name: string) => {
        const value = event.target.value as string;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleCurrenciesSwitch = useCallback(() => {
        setFormData(prev => ({ 
            ...prev, 
            currencyFromPrice: prev.currencyToPrice, 
            currencyToPrice: prev.currencyFromPrice  
        }));
    }, []);

    return [formData, receivedValue, error, handleInputChange, handleDropdownChange, handleCurrenciesSwitch];
};
