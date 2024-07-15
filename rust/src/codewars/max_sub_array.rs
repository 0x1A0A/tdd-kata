fn max_sequence(seq: &[i32]) -> i32 {
    let mut max = 0;
    let mut sum = 0;

    for v in seq {
        sum += v;

        if sum < 0 { sum = 0; }
        
        max = if sum > max { sum } else { max };
    }

    max
}

#[cfg(test)]
mod tests {
    use super::max_sequence;

    #[test]
    fn empty_array() {
        assert_eq!(max_sequence(&[]), 0);
    }

    #[test]
    fn tests() {
        assert_eq!(max_sequence(&[-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
        assert_eq!(max_sequence(&[11]), 11);
        assert_eq!(max_sequence(&[-32]), 0);
    }
}
