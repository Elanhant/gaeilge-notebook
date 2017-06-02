import * as React from 'react';
import './Page.css';

export interface Props {
    children?: any;
}

function Page({ children }: Props) {
    return (
        <main className="page">
            {children}
        </main>
    );
}

export default Page;
