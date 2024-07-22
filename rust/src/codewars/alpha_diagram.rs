use std::collections::HashMap;

fn list_position(word: &str) -> u128 {
    let mut count = HashMap::new();
    let mut pos: u128 = 1;
    let mut permutions = 1;

    for (i, v) in word.bytes().rev().enumerate() {
        count.entry(v).and_modify(|x| *x += 1).or_insert(1);

        for &num in count.keys() {
            if v > num {
                pos += permutions * count[&num] / count[&v];
            }
        }

        permutions = permutions * (i as u128 + 1) / count[&v];
    }

    pos
}

#[cfg(test)]
mod tests {
    use super::list_position;

    #[test]
    fn word_index_test() {
        let test_data = [
            ("A", 1),
            ("ABAB", 2),
            ("AAAB", 1),
            ("BAAA", 4),
            ("YMYM", 5),
            ("QUESTION", 24572),
            ("BOOKKEEPER", 10743),
            ("IMMUNOELECTROPHORETICALLY", 718393983731145698173),
        ];
        for (word, expected) in test_data {
            assert_eq!(list_position(word), expected,
            "\nYour result (left) did not match the expected output (right) for the input: \"{word}\"");
        }
    }
}
