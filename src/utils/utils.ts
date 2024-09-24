import React from 'react';
import { CURRENCIES_DATA, TOKEN_IMG_URL } from '../constants/constants';

interface ICurrency {
    currency: string;
    price: number;
    date: string;
    imageUrl: string;
}

export const getCurrencies = (): ICurrency[] => {
    return CURRENCIES_DATA.map((token) => ({...token, imageUrl: `${TOKEN_IMG_URL}${token.currency}.svg`}))
};

export const getNumericValidateMessage = (value: string): string => {
    const numericValue = parseFloat(value);
    let errorMessage = '';

    if (numericValue <= 0 || isNaN(numericValue)) {
        errorMessage = "Please enter a positive number greater than zero.";
    }

    if (numericValue >= Number.MAX_SAFE_INTEGER) {
        errorMessage = `Please enter a number less than ${Number.MAX_SAFE_INTEGER}`;
    }

    return errorMessage;
};


