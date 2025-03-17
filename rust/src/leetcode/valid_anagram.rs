use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map = HashMap::<char, i32>::new();

        s.chars().for_each(|c| {
            map.entry(c).and_modify(|x| *x += 1).or_insert(1);
        });

        t.chars().for_each(|c| {
            map.entry(c).and_modify(|x| *x -= 1).or_insert(1);
        });

        map.iter().all(|x| *x.1 == 0)
    }
}

mod tests {
    #[test]
    fn is_anagram_normal_char_not_matched() {
        assert_ne!(
            super::Solution::is_anagram("car".into(), "cat".into()),
            true
        );
    }

    #[test]
    fn is_anagram_normal_char_matched() {
        assert!(super::Solution::is_anagram(
            "anagram".into(),
            "nagaram".into()
        ),);
    }
}
