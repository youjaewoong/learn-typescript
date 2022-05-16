

// export 방법1
export const pi = Math.PI;
export function square(x) {
    return x * x;
}
export class Person {
    construcotr(name) {
        this.name = name;
    }
}

// export 방법2
export {pi, square, Person};
