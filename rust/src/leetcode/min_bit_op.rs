struct Solution;

impl Solution {
    pub fn min_operations(s: String) -> i32 {
        let mut count = 0;
        let mut alter: bool = false;

        for &i in s.as_bytes().iter() {
            count += if alter && i != b'1' || !alter && i != b'0' {
                1
            } else {
                0
            };
            alter = !alter;
        }

        std::cmp::min(count, s.len() - count) as i32
    }
}

#[cfg(test)]
pub mod tests {
    use super::*;

    #[test]
    fn minimun_op() {
        assert_eq!(Solution::min_operations("0100".to_string()), 1);
        assert_eq!(Solution::min_operations("0000".to_string()), 2);
        assert_eq!(Solution::min_operations("1111".to_string()), 2);
    }
}
