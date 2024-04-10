export class Vector {
  constructor(private elm: number[]) {}

  equals(other: Vector) {
    if (other.elm.length !== this.elm.length) return false;
    return other.elm.every((e, i) => e === this.elm[i]);
  }

  add(other: Vector) {
    this.assert_same_length(other);
    return new Vector(this.elm.map((e, i) => e + other.elm[i]));
  }

  substract(other: Vector) {
    this.assert_same_length(other);
    return new Vector(this.elm.map((e, i) => e - other.elm[i]));
  }

  dot(other: Vector) {
    this.assert_same_length(other);
    return new Vector(this.elm.map((e, i) => e * other.elm[i]));
  }

  norm() {
    return Math.sqrt(this.elm.reduce((acc, v) => acc + v * v, 0));
  }

  private assert_same_length(other: Vector) {
    if (other.elm.length !== this.elm.length) throw Error("Not same length");
  }
}
