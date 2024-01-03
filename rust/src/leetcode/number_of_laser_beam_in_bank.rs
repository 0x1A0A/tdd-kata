struct Solution;

impl Solution {
    pub fn number_of_beams(banks: Vec<String>) -> i32 {
        let mut last: i32 = 0;
        let mut max: i32 = 0;

        for bank in banks {
            let current: i32 = bank.as_bytes().iter().filter(|&x| *x == b'1').count() as i32;
            if current == 0 {
                continue;
            }
            max += current * last;
            last = if current != 0 { current } else { 0 };
        }

        max
    }
}

#[cfg(test)]
pub mod tests {
    use super::*;

    #[test]
    fn no_laser() {
        let case = vec![
            "011001".to_string(),
            "000000".to_string(),
            "000000".to_string(),
            "000000".to_string(),
        ];

        assert_eq!(Solution::number_of_beams(case), 0);
    }

    #[test]
    fn number_of_beams() {
        let case = vec![
            "011001".to_string(),
            "000000".to_string(),
            "010100".to_string(),
            "001000".to_string(),
        ];

        assert_eq!(Solution::number_of_beams(case), 8);
    }
}
