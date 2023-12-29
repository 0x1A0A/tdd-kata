struct Solution;

impl Solution {
    pub fn word_pattern(pattern: String, s: String) -> bool {
        let mut map: std::collections::HashMap<char, &str> = std::collections::HashMap::new();
        let mut set: std::collections::HashSet<&str> = std::collections::HashSet::new();

        let word: Vec<&str> = s.split(" ").collect();
        
        if word.len() != pattern.len() {
            return false;
        }

        for (i, v) in pattern.chars().into_iter().enumerate() {
            if let Some(w) = map.get(&v) {
                if *w != word[i] {
                    return false;
                }
                continue;
            }

            if let Some(_) = set.get(word[i]) {
                return false;
            }

            map.insert(v, word[i]);
            set.insert(word[i]);
        }

        true
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn false_if_pattern_lenght_is_not_equal_to_word() {
        let resutl = Solution::word_pattern("aaaa".to_owned(), "ok".to_owned());
        assert!(resutl == false);

        let resutl = Solution::word_pattern("aa".to_owned(), "ok ok ok".to_owned());
        assert!(resutl == false);
    }

    #[test]
    fn can_detect_one_pattern() {
        let resutl = Solution::word_pattern("a".to_owned(), "ok".to_owned());
        assert!(resutl)
    }

    #[test]
    fn can_detect_two_same_pattern() {
        let resutl = Solution::word_pattern("aa".to_owned(), "ok ok".to_owned());
        assert!(resutl)
    }

    #[test]
    fn can_detect_two_same_pattern_but_not_same_word() {
        let resutl = Solution::word_pattern("aa".to_owned(), "ok no".to_owned());
        assert!(resutl == false)
    }

    #[test]
    fn can_detect_two_different_pattern() {
        let resutl = Solution::word_pattern("ab".to_owned(), "ok ok".to_owned());
        assert!(resutl == false)
    }
}
