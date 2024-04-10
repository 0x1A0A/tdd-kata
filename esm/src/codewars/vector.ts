export class Vector {
  constructor(public elm: number[]) {}

  equals(other: Vector) {
    return other.elm.every((e, i) => e=== this.elm[i]);
  }
}
