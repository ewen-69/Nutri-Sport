import React from 'react';
import './badge.css';

interface BadgeProps {
    variant?: 'default' | 'primary' | 'secondary';
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'default', children }) => {
    return <span className={`badge badge--${variant}`}>{children}</span>;
};

export default Badge;