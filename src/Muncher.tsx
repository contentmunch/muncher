import React, {useState} from "react";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {ListItemNode, ListNode} from '@lexical/list';
import {TableCellNode, TableNode, TableRowNode} from "@lexical/table";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {HtmlPlugin, HtmlProps} from "./plugins/HtmlPlugin";
import ExampleTheme from "./themes/MuncherEditorTheme";
import {LinkPlugin} from "@lexical/react/LexicalLinkPlugin";
import "./assets/scss/Muncher.scss";
import {ToolbarPlugin} from "./plugins/ToolbarPlugin";
import {FloatingLinkEditorPlugin} from "./plugins/FloatingLinkEditorPlugin";

export const Muncher: React.FC<MuncherProps> = ({onChange, html}) => {
    const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);
    const [floatingAnchorElem, setFloatingAnchorElem] =
        useState<HTMLElement | null>(null);
    const onError = (error: Error) => console.error(error);

    const initialConfig = {
        namespace: 'Muncher',
        theme: ExampleTheme,
        onError,
        nodes: [HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,]
    };
    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    return (
        <div className="muncher-editor">
            <LexicalComposer initialConfig={initialConfig}>

                <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode}/>
                <div className="muncher-editor-inner" ref={onRef}>
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="muncher-editor-input"/>}
                        placeholder={<div className="muncher-editor-placeholder">Enter some text...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin/>
                    <AutoFocusPlugin/>
                    <ListPlugin/>
                    <LinkPlugin/>
                    {floatingAnchorElem ? <FloatingLinkEditorPlugin
                        anchorElem={floatingAnchorElem}
                        isLinkEditMode={isLinkEditMode}
                        setIsLinkEditMode={setIsLinkEditMode}
                    /> : ""}

                    <HtmlPlugin
                        onChange={onChange}
                        html={html}
                    />
                </div>
            </LexicalComposer>
        </div>
    );
};

export interface MuncherProps extends HtmlProps {

}
