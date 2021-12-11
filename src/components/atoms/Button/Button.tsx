
import classNames from 'classnames';
import * as React from 'react';

import './Button.scss';

export type ButtonModeType = 
    | 'primary'
    | 'secondary'

export type ButtonSizeType =
    | 'small'
    | 'medium'
    | 'large'

export type ButtonAnimationType =
    | 'pressed'

interface ButtonProps{
    size:  ButtonSizeType, 
    mode?: ButtonModeType,
    value: string,
    animation?: ButtonAnimationType | ''
    rounded?: boolean | null
    onClick?: () => void
}

const Button : React.FC<ButtonProps> = ({
    size = 'medium',
    mode = 'primary',
    value,
    animation = '',
    rounded = false,
    ...props
}: ButtonProps) => {
    
    const btnClass = classNames({
        btn: true, 
        [`btn--${size}`]: true,
        [`btn--${mode}`]: true,
        [`btn--${animation}`]: true,
        [`btn--rounded`]: rounded
    });    
    return (
        <button className={btnClass} {...props}>
            {value}
        </button>
    );
} 

export default Button; 