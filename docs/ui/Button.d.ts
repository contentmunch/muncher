import React from "react";
export declare const Button: React.FC<ButtonProps>;
export interface ButtonProps {
    disabled: boolean;
    onClick: () => void;
    title: string;
    ariaLabel: string;
    children?: React.ReactNode;
    active?: boolean;
}
