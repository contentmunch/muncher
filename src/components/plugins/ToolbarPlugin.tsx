import React, {Dispatch, useCallback, useEffect, useState} from "react";
import "./assets/ToolbarPlugin.scss"
import {
    $createParagraphNode,
    $getSelection,
    $isRangeSelection,
    $isRootOrShadowRoot,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    COMMAND_PRIORITY_CRITICAL,
    COMMAND_PRIORITY_NORMAL,
    DEPRECATED_$isGridSelection,
    FORMAT_TEXT_COMMAND,
    KEY_MODIFIER_COMMAND
} from "lexical";
import {Button} from "../ui/Button.tsx";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$findMatchingParent, $getNearestNodeOfType, mergeRegister} from "@lexical/utils";
import {getSelectedNode} from "../utils/getSelectedNode.ts";
import {$isLinkNode, TOGGLE_LINK_COMMAND} from '@lexical/link';
import {
    $isListNode,
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    ListNode,
    REMOVE_LIST_COMMAND
} from "@lexical/list";
import {Divider} from "../ui/Divider.tsx";
import {$setBlocksType,} from "@lexical/selection";
import {$createHeadingNode, $createQuoteNode, $isHeadingNode, HeadingTagType,} from "@lexical/rich-text";
import {sanitizeUrl} from "../utils/url.ts";

const blockTypeToBlockName = {
    bullet: "Bulleted List",
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    number: "Numbered List",
    check: "Check List",
    paragraph: "Normal",
    quote: "Quote",
};
export const ToolbarPlugin: React.FC<ToolbarPluginProps> = ({setIsLinkEditMode, variant}) => {
    const [editor] = useLexicalComposerContext();
    const [activeEditor] = useState(editor);
    const [blockType, setBlockType] =
        useState<keyof typeof blockTypeToBlockName>("paragraph");

    const [isLink, setIsLink] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    const [isCode, setIsCode] = useState(false);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    //   const [modal, showModal] = useModal();

    const [isEditable, setIsEditable] = useState(() => editor.isEditable());

    const formatHeading = (headingSize: HeadingTagType) => {
        if (blockType !== headingSize) {
            editor.update(() => {
                const selection = $getSelection();
                if (
                    $isRangeSelection(selection) ||
                    DEPRECATED_$isGridSelection(selection)
                ) {
                    $setBlocksType(selection, () => $createHeadingNode(headingSize));
                }
            });
        }
    };
    const formatParagraph = () => {
        editor.update(() => {
            const selection = $getSelection();
            if (
                $isRangeSelection(selection) ||
                DEPRECATED_$isGridSelection(selection)
            ) {
                $setBlocksType(selection, () => $createParagraphNode());
            }
        });
    }
    const formatQuote = () => {
        if (blockType !== "quote") {
            editor.update(() => {
                const selection = $getSelection();
                if (
                    $isRangeSelection(selection) ||
                    DEPRECATED_$isGridSelection(selection)
                ) {
                    $setBlocksType(selection, () => $createQuoteNode());
                }
            });
        }
    };
    const formatBulletList = () => {
        if (blockType !== "bullet") {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        }
    };
    const formatNumberedList = () => {
        if (blockType !== "number") {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        }
    };

    const insertLink = useCallback(() => {
        if (!isLink) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
        } else {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }
    }, [editor, isLink]);


    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const anchorNode = selection.anchor.getNode();
            let element =
                anchorNode.getKey() === "root"
                    ? anchorNode
                    : $findMatchingParent(anchorNode, (e) => {
                        const parent = e.getParent();
                        return parent !== null && $isRootOrShadowRoot(parent);
                    });

            if (element === null) {
                element = anchorNode.getTopLevelElementOrThrow();
            }

            const elementKey = element.getKey();
            const elementDOM = activeEditor.getElementByKey(elementKey);

            // Update text format
            setIsBold(selection.hasFormat("bold"));
            setIsItalic(selection.hasFormat("italic"));
            setIsUnderline(selection.hasFormat("underline"));

            setIsCode(selection.hasFormat("code"));


            // Update links
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                setIsLink(true);
            } else {
                setIsLink(false);
            }

            if (elementDOM !== null) {

                if ($isListNode(element)) {
                    const parentList = $getNearestNodeOfType<ListNode>(
                        anchorNode,
                        ListNode
                    );
                    const type = parentList
                        ? parentList.getListType()
                        : element.getListType();
                    setBlockType(type);
                } else {
                    const type = $isHeadingNode(element)
                        ? element.getTag()
                        : element.getType();
                    if (type in blockTypeToBlockName) {
                        setBlockType(type as keyof typeof blockTypeToBlockName);
                    }

                }
            }
        }
    }, [activeEditor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerEditableListener((editable) => {
                setIsEditable(editable);
            }),
            activeEditor.registerUpdateListener(({editorState}) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
            activeEditor.registerCommand<boolean>(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload);
                    return false;
                },
                COMMAND_PRIORITY_CRITICAL
            ),
            activeEditor.registerCommand<boolean>(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload);
                    return false;
                },
                COMMAND_PRIORITY_CRITICAL
            )
        );
    }, [activeEditor, editor, updateToolbar]);
    useEffect(() => {
        return activeEditor.registerCommand(
            KEY_MODIFIER_COMMAND,
            (payload) => {
                const event: KeyboardEvent = payload;
                const {code, ctrlKey, metaKey} = event;

                if (code === 'KeyK' && (ctrlKey || metaKey)) {
                    event.preventDefault();
                    if (!isLink) {
                        setIsLinkEditMode(true);
                    } else {
                        setIsLinkEditMode(false);
                    }
                    return activeEditor.dispatchCommand(
                        TOGGLE_LINK_COMMAND,
                        sanitizeUrl('https://'),
                    );
                }
                return false;
            },
            COMMAND_PRIORITY_NORMAL,
        );
    }, [activeEditor, isLink, setIsLinkEditMode]);

    return (
        <div className="muncher-editor-toolbar">
            {variant === "basic" ?
                <></> : <>
                    <Button
                        disabled={!isEditable}
                        active={blockType === "paragraph"}
                        onClick={() => formatParagraph()}
                        title="Paragraph"
                        ariaLabel="Paragraph">
                        <i className="paragraph"/>
                    </Button>
                    <Button
                        disabled={!isEditable}
                        active={blockType === "h1"}
                        onClick={() => formatHeading("h1")}
                        title="Heading 1"
                        ariaLabel="Heading 1">
                        <i className="h1"/>
                    </Button>
                    <Button
                        disabled={!isEditable}
                        active={blockType === "h2"}
                        onClick={() => formatHeading("h2")}
                        title="Heading 2"
                        ariaLabel="Heading 2">
                        <i className="h2"/>
                    </Button>
                    <Button
                        disabled={!isEditable}
                        active={blockType === "h3"}
                        onClick={() => formatHeading("h3")}
                        title="Heading 3"
                        ariaLabel="Heading 3">
                        <i className="h3"/>
                    </Button>
                    <Button
                        disabled={!isEditable}
                        active={blockType === "quote"}
                        onClick={() => formatQuote()}
                        title="Quote"
                        ariaLabel="Quote">
                        <i className="quote"/>
                    </Button></>
            }

            <Button
                disabled={!isEditable}
                active={blockType === "bullet"}
                onClick={() => formatBulletList()}
                title="Bullet list"
                ariaLabel="Bullet list">
                <i className="bullet-list"/>
            </Button>
            <Button
                disabled={!isEditable}
                active={blockType === "number"}
                onClick={() => formatNumberedList()}
                title="Number list"
                ariaLabel="Number list">
                <i className="numbered-list"/>
            </Button>
            <Divider/>
            <Button
                disabled={!isEditable}
                onClick={() => {
                    activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
                }}
                active={isBold}
                title={"Bold (⌘B)"}
                ariaLabel="text as bold. Shortcut:⌘B">
                <i className="bold"/>
            </Button>
            <Button
                disabled={!isEditable}
                onClick={() => {
                    activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
                }}
                active={isItalic}
                title={"Itallic (⌘I)"}
                ariaLabel="text as italic. Shortcut:⌘I">
                <i className="italic"/>
            </Button>
            <Button
                disabled={!isEditable}
                onClick={() => {
                    activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
                }}
                active={isUnderline}
                title={"Underline (⌘U)"}
                ariaLabel="text as underline. Shortcut:⌘U">
                <i className="underline"/>
            </Button>
            <Button
                disabled={!isEditable}
                onClick={() => {
                    activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
                }}
                active={isCode}
                title={"Code"}
                ariaLabel="text as code.">
                <i className="code"/>
            </Button>
            <Button
                disabled={!isEditable}
                onClick={insertLink}
                active={isLink}
                ariaLabel="Insert link"
                title="Insert link">
                <i className="link"/>
            </Button>

        </div>
    );
}

export interface ToolbarPluginProps {
    setIsLinkEditMode: Dispatch<boolean>
    variant?: "basic" | "simple"
}
