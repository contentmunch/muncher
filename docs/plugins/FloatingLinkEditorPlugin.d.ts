import React, {Dispatch} from "react";

export declare const FloatingLinkEditorPlugin: React.FC<FloatingLinkEditorPluginProps>;
export interface FloatingLinkEditorPluginProps {
    anchorElem: HTMLElement;
    isLinkEditMode: boolean;
    setIsLinkEditMode: Dispatch<boolean>;
}
