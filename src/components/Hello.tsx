import * as React from 'react';
import Button, { Color } from './ui/Button';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic!');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <Button onClick={onIncrement} color={Color.green}>+</Button>
                <Button onClick={onDecrement}>-</Button>
            </div>
        </div>
    );
}

export default Hello;

// Helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
