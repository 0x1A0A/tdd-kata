struct Solution;

impl Solution {
    pub fn max_length_between_equal_characters(s: String) -> i32 {
        let mut c: [i32; 26] = [-1; 26];
        let mut max = -1;

        for i in 0..s.len() {
            let cc = s.chars().nth(i).unwrap() as usize - 'a' as usize;
            match c[cc] {
                -1 => c[cc] = i as i32,
                v => max = std::cmp::max(i as i32 - v - 1, max),
            }
        }

        max
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn minus_one_if_no_pair() {
        assert_eq!(
            Solution::max_length_between_equal_characters("abcdef".to_owned()),
            -1
        );
    }

    #[test]
    fn length_of_substiring_between_empty() {
        assert_eq!(
            Solution::max_length_between_equal_characters("aa".to_owned()),
            0
        );
    }

    #[test]
    fn length_of_substiring_between() {
        assert_eq!(
            Solution::max_length_between_equal_characters("ata".to_owned()),
            1
        );

        assert_eq!(
            Solution::max_length_between_equal_characters("arustyates".to_owned()),
            5
        );

        assert_eq!(
            Solution::max_length_between_equal_characters("mgntdygtxrvxjnwksqhxuxtrv".to_owned()),
            18
        );
    }
}
