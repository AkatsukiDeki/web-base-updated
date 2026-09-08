/// <reference types="vite/client" />

declare namespace jest {
    interface IScriptParams {
        src: string;
        defer: boolean;
        async: boolean;
    }

    interface Matchers<R> {
        toHaveScriptWithParams(expected: jest.IScriptParams): R;
    }
}
