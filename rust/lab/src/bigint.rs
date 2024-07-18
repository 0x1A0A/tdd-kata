#[cfg(test)]
mod tests {
    use num::{BigInt, FromPrimitive};

    #[test]
    fn bigint() {
        let mut big = BigInt::ZERO;

        big += u64::MAX;

        assert_eq!(BigInt::from_u64(u64::MAX).unwrap(), big);
    }
}
