type Push<T extends unknown[], U> =
    T extends [...infer A] ?
        [...A, U] : never
