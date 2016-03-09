/// <reference path="typings/main.d.ts" />

declare module CodeMirror {
    var modeURL: string;
    
    function requireMode(mode: string, cont: () => void): void;
    function requireMode(mode: { name: string }, cont: () => void): void;
    
    function autoLoadMode(instance: CodeMirror.Editor, mode: string): void;
    function autoLoadMode(instance: CodeMirror.Editor, mode: { name: string }): void;
}
