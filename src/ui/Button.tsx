import React from "react";
import "./assets/Button.scss"

export const Button: React.FC<ButtonProps> = ({disabled, onClick, title, ariaLabel, active, children}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            title={title}
            type="button"
            className={active ? "muncher-editor-button active" : "muncher-editor-button"}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export interface ButtonProps {
    disabled: boolean;
    onClick: () => void;
    title: string;
    ariaLabel: string;
    children?: React.ReactNode
    active?: boolean;
}
