fn solution(arr: &[u64]) -> u128 {
    let size = arr.len();
    let mut result = arr[0] as u128;
    for &i in &arr[1..] {
        result = gcd(result, i as u128);
    }

    result * size as u128
}

fn gcd(a: u128, b: u128) -> u128 {
    if b == 0 {
        a
    } else {
        gcd(b, a % b)
    }
}

#[cfg(test)]
mod tests {
    use super::solution;

    #[test]
    fn fixed_tests() {
        assert_eq!(solution(&[1, 21, 55]), 3);
        assert_eq!(solution(&[3, 13, 23, 7, 83]), 5);
        assert_eq!(solution(&[4, 16, 24]), 12);
        assert_eq!(solution(&[30, 12]), 12);
        assert_eq!(solution(&[60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48]), 132);
        assert_eq!(
            solution(&[71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]),
            923
        );
        assert_eq!(solution(&[11, 22]), 22);
        assert_eq!(solution(&[9]), 9);
        assert_eq!(solution(&[1]), 1);
        assert_eq!(solution(&[9, 9]), 18);
    }
}
