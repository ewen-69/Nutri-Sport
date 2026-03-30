import React from 'react';
import { ScrollArea } from 'react-scrollbar';

const ScrollAreaComponent = ({ children }) => {
    return (
        <ScrollArea style={{ height: '100%', width: '100%' }}>
            {children}
        </ScrollArea>
    );
};

export default ScrollAreaComponent;