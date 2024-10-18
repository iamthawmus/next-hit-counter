'use client'
import React from 'react';

function CensorButton({ children }) {
    const [cssClass, setCssClass] = React.useState('censored');
    return (
        <button
            className={cssClass}
            onClick={() => {
                setCssClass(cssClass === 'censored' ? '' : 'censored');
            }}
        >
            {children}
        </button>
    )
}


export default CensorButton;