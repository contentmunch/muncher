import {Muncher} from "../components/Muncher.tsx";
import "./assets/App.scss";

export const App: React.FC = () => {
    const html = "<h1 class=\"muncher-editor-heading-h1\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Muncher</span></h1><p class=\"muncher-editor-paragraph\" dir=\"ltr\"><a href=\"https://www.muncher.dev/\" class=\"muncher-editor-link\"><span style=\"white-space: pre-wrap;\">Muncher</span></a><span style=\"white-space: pre-wrap;\"> is a rich text editor based on </span><a href=\"https://lexical.dev/\" class=\"muncher-editor-link\"><span style=\"white-space: pre-wrap;\">Lexical</span></a><span style=\"white-space: pre-wrap;\"> with a focus on content reuse.</span></p><blockquote class=\"muncher-editor-quote\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">In case you need to see the count of the words. You can check the console log. You can even use the count in your application to restrict usage.</span></blockquote><h3 class=\"muncher-editor-heading-h3\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Using Muncher</span></h3><p class=\"muncher-editor-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">To use this component library:</span></p><ul class=\"muncher-editor-list-ul\"><li value=\"1\" class=\"muncher-editor-listitem\"><span style=\"white-space: pre-wrap;\">add the npm package to your project</span></li><li value=\"2\" class=\"muncher-editor-listitem\"><code spellcheck=\"false\" style=\"white-space: pre-wrap;\"><span class=\"muncher-editor-text-code\">$ npm install @contentmunch/muncher</span></code></li></ul>";
    return (
        <main>
            <h1>Muncher Playground</h1>
            <div className="container">
                <Muncher html={html}
                         variant="basic"
                         onChange={(html: string, characterCount: number) => {
                             console.log("count:", characterCount);
                             console.log(html);
                         }}/>
            </div>
        </main>
    )
}

