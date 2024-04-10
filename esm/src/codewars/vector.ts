export class Vector {
  constructor(private elm: number[]) {}

  equals(other: Vector) {
    return other.elm.every((e, i) => e === this.elm[i]);
  }

  add(other: Vector) {
    return new Vector(this.elm.map((e, i) => e + other.elm[i]));
  }

  substract(other: Vector) {
    return new Vector(this.elm.map((e, i) => e - other.elm[i]));
  }
}
