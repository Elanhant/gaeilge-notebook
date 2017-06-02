import * as React from 'react';
import './Header.css';

export interface Props {
    children?: any;
}

function Header({ children }: Props) {
    return (
        <header className="header">
            {children}
        </header>
    );
}

export default Header;
