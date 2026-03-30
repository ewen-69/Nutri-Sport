import React from 'react';
import { Card as MuiCard, CardContent as MuiCardContent, CardHeader as MuiCardHeader, Typography } from '@mui/material';

export const Card = (props) => {
    return <MuiCard {...props} />;
};

export const CardContent = (props) => {
    return <MuiCardContent {...props} />;
};

export const CardHeader = (props) => {
    return <MuiCardHeader {...props} />;
};

export const CardTitle = ({ children }) => {
    return <Typography variant='h5'>{children}</Typography>;
};

export const CardDescription = ({ children }) => {
    return <Typography variant='body2'>{children}</Typography>;
};