import React from "react";

export declare const HtmlPlugin: React.FC<HtmlPluginProps>;
export interface HtmlProps {
    html?: string;
    onChange: (html: string, characterCount: number) => void;
}
export interface HtmlPluginProps extends HtmlProps {
}
