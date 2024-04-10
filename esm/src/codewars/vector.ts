export class Vector {
  constructor(private elm: number[]) {}

  equals(other: Vector) {
    return other.elm.every((e, i) => e === this.elm[i]);
  }

  add(other: Vector) {
    return new Vector(other.elm.map((e, i) => e + this.elm[i]));
  }
}
