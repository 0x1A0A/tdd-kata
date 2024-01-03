struct Solution;

impl Solution {
    pub fn sum_of_multiples(n: i32) -> i32 {
        let divide: Vec<i32> = vec![3, 5, 7];
        (3..=n).filter(|&x| divide.iter().any(|&d| x % d == 0)).sum()
    }
}

#[cfg(test)]
pub mod tests {
    use super::*;

    #[test]
    fn sum() {
        assert_eq!(Solution::sum_of_multiples(7), 21);
        assert_eq!(Solution::sum_of_multiples(10), 40);
        assert_eq!(Solution::sum_of_multiples(9), 30);
    }
}
