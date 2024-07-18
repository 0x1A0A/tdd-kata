// the matrix representation of fibonacci sequence
// 0 1 | a = b
// 1 1 | b = a+b

#[cfg(test)]
mod tests {
    use num::BigInt;

    #[test]
    fn positive_sequence() {
        assert_eq!(BigInt::ZERO + 1, BigInt::from(1));
    }
}
