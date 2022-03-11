interface MyArray<T> {
    [N: number]: T;

    reduce(fn: (accumulator: T, value: T) => T, initialValue: T): T;
}

const arr: MyArray<number> = [1, 2, 3];
const initialValue = 0;
const result = arr.reduce((accumulator, value) => accumulator + value, initialValue);

console.log(result);
