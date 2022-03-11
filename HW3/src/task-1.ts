export {};

type Str = string;

function concatStr(str1: Str, str2: Str): Str {
    return str1 + str2;
}

console.log(concatStr('Hello ', 'World'));
