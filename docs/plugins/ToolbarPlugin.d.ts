import React, {Dispatch} from "react";

export declare const ToolbarPlugin: React.FC<ToolbarPluginProps>;
export interface ToolbarPluginProps {
    setIsLinkEditMode: Dispatch<boolean>;
}
