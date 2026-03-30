import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Assume there's a CSS file for styles

const Button = ({ variant, size, children, onClick }) => {
    const classes = `btn btn-${variant} btn-${size}`;
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'icon']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    variant: 'default',
    size: 'md',
    onClick: () => {}
};

export default Button;