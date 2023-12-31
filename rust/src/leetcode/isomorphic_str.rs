struct Solution;

impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        let mut map: [[i32; 256]; 2] = [[-1; 256]; 2];

        for i in 0..s.len() {
            let first = s.chars().nth(i).unwrap() as usize;
            let second = t.chars().nth(i).unwrap() as usize;

            if map[0][first] == -1 {
                map[0][first] = second as i32
            }
            if map[1][second] == -1 {
                map[1][second] = first as i32
            }

            if map[0][first] != second as i32 || map[1][second] != first as i32 {
                return false;
            }
        }

        true
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn detect_if_string_isomorphic() {
        assert!(Solution::is_isomorphic("abc".to_owned(), "def".to_owned()));
        assert!(Solution::is_isomorphic(
            "paper".to_owned(),
            "title".to_owned()
        ));
    }

    #[test]
    fn detect_if_string_not_isomorphic() {
        assert!(Solution::is_isomorphic("abc".to_owned(), "ddd".to_owned()) == false);
    }

    #[test]
    fn support_ascii() {
        assert!(Solution::is_isomorphic("12".to_owned(), "14".to_owned()));
    }
}
