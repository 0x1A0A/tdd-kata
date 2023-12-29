struct Solution;

impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let mut result: String = strs[0].clone();

        for i in 1..strs.len() {
            let min = std::cmp::min(result.len(), strs[i].len());
            let mut k = 0;
            for j in 0..min {
                if &result[j..j + 1] == &strs[i][j..j + 1] {
                    k += 1;
                } else {
                    break;
                };
            }

            result = result[..k].to_string();
        }

        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_string_if_no_common() {
        assert_eq!(
            Solution::longest_common_prefix(vec!["a".into(), "b".into(), "c".into()]),
            "".to_string()
        )
    }

    #[test]
    fn find_longest_common_prefix() {
        assert_eq!(
            Solution::longest_common_prefix(vec![
                "prefix".into(),
                "prequel".into(),
                "pre render".into()
            ]),
            "pre".to_string()
        );

        assert_eq!(
            Solution::longest_common_prefix(vec!["cir".into(), "car".into()]),
            "c".to_string()
        );
    }
}
