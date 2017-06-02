import * as React from 'react';
import './Button.css';

export interface Props {
    color?: Color;
    onClick?: () => void;
    children?: any;
}

export enum Color { green = 1 }

function Button({ color, onClick, children }: Props) {
    const buttonClass = color ? `button button--color-${Color[color]}` : `button`;

    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    );
}

export default Button;
