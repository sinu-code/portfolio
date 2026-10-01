import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const CRTScanlines = () => {
    const { crtEnabled } = useTheme();
    return <div className={`scanlines ${crtEnabled ? '' : 'off'}`}></div>;
};
