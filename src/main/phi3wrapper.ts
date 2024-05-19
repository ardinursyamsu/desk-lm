import { ChatPromptWrapper } from "node-llama-cpp";

export class Phi3ChatPrompWrapper extends ChatPromptWrapper {
    public readonly wrapperName: string = "Phi3Chat";

    public override wrapPrompt(prompt: string, {systemPrompt, promptIndex}: {systemPrompt: string, promptIndex: number}) {
        if (promptIndex === 0) {
            return "<|system|>\n" + systemPrompt + "<|end|>\n<|user|>\n" + prompt + "<|end|>\n<|assistant|>\n";
        } else {
            return "<|user|>\n" + prompt + "<|end|>\n<|assistant|>\n";
        }
    }

    public override getStopStrings(): string[] {
        return ["<|end|>", "<|user|>", " <|user| "];
    }

    public override getDefaultStopString(): string {
        return "<|end|>";
    }

}