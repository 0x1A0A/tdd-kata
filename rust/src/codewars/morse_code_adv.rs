use std::collections::HashMap;

pub fn decode_bits(encoded: &str) -> String {
    let mut last: Option<char> = None;
    let mut freq = i32::MAX;
    let mut curr = 1;

    let encoded = encoded.trim_matches('0');

    for i in encoded.chars() {
        if let Some(c) = last {
            match c.cmp(&i) {
                std::cmp::Ordering::Equal => curr += 1,
                _ => {
                    last = Some(i);
                    freq = freq.min(curr);
                    curr = 1;
                }
            }
        } else {
            last = Some(i);
            curr = 1;
        }
    }

    encoded
        .chars()
        .step_by(freq as usize)
        .collect::<String>()
        .replace("111", "-")
        .replace("1", ".")
        .replace("0000000", "   ")
        .replace("000", " ")
        .replace("0", "")
}

pub fn decode_morse(encoded: &str) -> String {
    let morse = HashMap::from([
        (".-", "A"),
        ("-...", "B"),
        ("-.-.", "C"),
        ("-..", "D"),
        (".", "E"),
        ("..-.", "F"),
        ("--.", "G"),
        ("....", "H"),
        ("..", "I"),
        (".---", "J"),
        ("-.-", "K"),
        (".-..", "L"),
        ("--", "M"),
        ("-.", "N"),
        ("---", "O"),
        (".--.", "P"),
        ("--.-", "Q"),
        (".-.", "R"),
        ("...", "S"),
        ("-", "T"),
        ("..-", "U"),
        ("...-", "V"),
        (".--", "W"),
        ("-..-", "X"),
        ("-.--", "Y"),
        ("--..", "Z"),
        ("-----", "0"),
        (".----", "1"),
        ("..---", "2"),
        ("...--", "3"),
        ("....-", "4"),
        (".....", "5"),
        ("-....", "6"),
        ("--...", "7"),
        ("---..", "8"),
        ("----.", "9"),
    ]);

    encoded
        .split("   ")
        .map(|word| {
            word.split(" ")
                .filter_map(|x| morse.get(x).map(|&v| v))
                .collect::<String>()
        })
        .collect::<Vec<_>>()
        .join(" ")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn decode_rate() {
        let code = "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
        assert_eq!(decode_bits(code), ".... . -.--   .--- ..- -.. .");
    }

    #[test]
    fn decode_rate_handle_leading_end_0() {
        let code = "011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000";
        assert_eq!(decode_bits(code), ".... . -.--   .--- ..- -.. .");
    }

    #[test]
    fn complete() {
        let code = "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
        assert_eq!(decode_morse(&decode_bits(code)), "HEY JUDE".to_string());
    }
}
