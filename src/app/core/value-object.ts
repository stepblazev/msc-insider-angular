export abstract class ValueObject<T> {
    protected readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public equals(vo: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }
        return this.value === vo.value;
    }
}
