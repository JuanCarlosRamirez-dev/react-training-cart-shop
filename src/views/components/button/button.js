import React from 'react';
import './button.scss';
import classNames from 'classnames';

const Button = ({ className, label, onClick, type = 'button' }) => {
    const cssClasses = classNames("generic-btn", className)
    return (
        <button className={cssClasses} onClick={onClick} type={type}>
            {label}
        </button>
    );
}

export default Button;