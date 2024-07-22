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
        .collect::<Vec<_>>()
        .chunks(freq as usize)
        .map(|x| x[0])
        .fold(Vec::new(), |mut acc, v| {
            if acc.is_empty() {
                acc.push((v, 1));
            } else {
                if let Some(data) = acc.last_mut() {
                    if data.0.eq(&v) {
                        data.1 += 1;
                    } else {
                        acc.push((v, 1));
                    }
                }
            }
            acc
        })
        .into_iter()
        .filter(|x| x.ne(&('0', 1)))
        .map(|x| match x {
            ('1', x) => {
                if x == 3 {
                    "-"
                } else {
                    "."
                }
            }
            (_, x) => {
                if x == 3 {
                    " "
                } else {
                    "   "
                }
            }
        })
        .collect::<Vec<_>>()
        .join("")
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
        .split(" ")
        .into_iter()
        .map(|x| {
            if let Some(&v) = morse.get(x) {
                v.to_string()
            } else {
                " ".to_string()
            }
        })
        .collect::<Vec<_>>()
        .join("")
        .split_whitespace()
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
