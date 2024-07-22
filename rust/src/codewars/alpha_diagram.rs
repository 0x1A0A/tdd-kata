use std::collections::HashMap;

fn list_position(word: &str) -> u128 {
    let mut cache = HashMap::new();
    let mut alpha = [0; 26];
    for i in word.bytes() {
        alpha[(i - 'A' as u8) as usize] += 1;
    }

    let mut index = 0;
    let mut current = 0;

    while current < word.len() {
        let remain = word.len() - current;
        let character = word.as_bytes()[current] - 'A' as u8;
        for (c, _) in alpha.iter().enumerate().filter(|(_, &v)| v != 0) {
            if c as u8 == character {
                break;
            }
            let mut temp = alpha.clone();
            temp[c as usize] -= 1;
            let possible = factorial((remain - 1) as u32, &mut cache);
            let repeated = temp
                .iter()
                .map(|&x| factorial(x, &mut cache))
                .fold(1, |acc, v| acc * v);
            index += possible / repeated;
        }
        alpha[character as usize] -= 1;
        current += 1;
    }

    index as u128 + 1
}

fn factorial(n: u32, cache: &mut HashMap<u32, u128>) -> u128 {
    if n == 0 {
        return 1;
    }

    if let Some(&v) = cache.get(&n) {
        return v;
    }

    let result = n as u128 * factorial(n - 1, cache);
    cache.insert(n, result);

    result
}

#[cfg(test)]
mod tests {
    use super::list_position;
    use std::collections::HashMap;

    #[test]
    fn factorial_test() {
        let mut cache = HashMap::new();
        assert_eq!(super::factorial(0, &mut cache), 1);
        assert_eq!(super::factorial(5, &mut cache), 120);
        assert_eq!(super::factorial(9, &mut cache), 362880);
    }

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
