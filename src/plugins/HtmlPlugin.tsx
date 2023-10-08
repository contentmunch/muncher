import React, {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$generateHtmlFromNodes, $generateNodesFromDOM} from "@lexical/html";
import {$getRoot, $insertNodes} from "lexical";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";

export const HtmlPlugin: React.FC<HtmlPluginProps> = ({html, onChange}) => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        console.log("html:", html);
        if (!html) return;

        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(html, "text/html");
            const nodes = $generateNodesFromDOM(editor, dom);
            $getRoot().select();
            $insertNodes(nodes);
        });
    }, [html]);

    return (
        <OnChangePlugin
            onChange={(editorState) => {

                editorState.read(() => {
                    const count = editor.getRootElement()?.textContent?.length;
                    onChange($generateHtmlFromNodes(editor), count ? count : 0);
                });
            }}
        />);
};

export interface HtmlProps {
    html?: string;
    onChange: (html: string, characterCount: number) => void;
}

export interface HtmlPluginProps extends HtmlProps {

}
