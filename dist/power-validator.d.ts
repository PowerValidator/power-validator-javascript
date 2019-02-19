// Generated by dts-bundle v0.7.3

declare module 'power-validator' {
    export * from "power-validator/StringValidator";
    export * from "power-validator/NumberValidator";
    export * from "power-validator/ArrayValidator";
}

declare module 'power-validator/StringValidator' {
    export function isString(input: any): boolean;
    export function isStringNull(input: any): boolean;
    export function isStringEmpty(input: any): boolean;
    export function isStringValid(input: any): boolean;
    export function isCapitalized(input: any): boolean;
}

declare module 'power-validator/NumberValidator' {
    export function isNumber(input: any): boolean;
}

declare module 'power-validator/ArrayValidator' {
    export function isArray(input: any): boolean;
}

