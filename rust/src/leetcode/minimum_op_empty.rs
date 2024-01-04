struct Solution;

impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        let mut map: std::collections::HashMap<i32, i32> = std::collections::HashMap::new();

        for v in nums {
            match map.get_mut(&v) {
                Some(x) => {
                    *x += 1;
                }
                None => {
                    map.insert(v, 1);
                }
            }
        }

        let mut max = 0;

        for (_, &v) in map.iter() {
            if v == 1 {
                return -1;
            }
            max += (v as f32 / 3.0).ceil() as i32;
        }

        max
    }
}

#[cfg(test)]
pub mod tests {
    use super::*;

    #[test]
    fn cant_empty() {
        assert_eq!(Solution::min_operations(vec![2, 1, 2, 2, 2, 3, 3]), -1);
    }

    #[test]
    fn minimum_op() {
        assert_eq!(Solution::min_operations(vec![2, 1, 1, 2, 2, 2, 3, 3]), 4);
    }
}
