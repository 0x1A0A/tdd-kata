fn valid_isbn10(isbn: &str) -> bool {
    let mut c = 0;
    let mut sum: u32 = 0;
    for i in isbn.bytes() {
        c += 1;
        match value(i) {
            None => return false,
            Some(10) if c != 10 => return false,
            Some(x) => sum += x as u32 * c,
        }
    }
    if c == 10 {
        sum % 11 == 0
    } else {
        false
    }
}

fn value(v: u8) -> Option<u8> {
    match v as char {
        '0'..='9' => Some(v as u8 - '0' as u8),
        'X' => Some(10),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use super::valid_isbn10;

    fn dotest(isbn: &str, expected: bool) {
        let actual = valid_isbn10(isbn);
        assert!(
            actual == expected,
            "Test failed with isbn = {isbn}\nExpected {expected} but got {actual}"
        )
    }

    #[test]
    fn validate_pass() {
        dotest("1112223339", true);
        dotest("048665088X", true);
        dotest("1293000000", true);
        dotest("1234554321", true);
    }

    #[test]
    fn validation_failed() {
        dotest("1234512345", false);
        dotest("X123456788", false);
    }

    #[test]
    fn last_char_is_not_digit_or_x() {
        dotest("ABCDEFGHIJ", false);
        dotest("123456789T", false);
    }

    #[test]
    fn wrong_input_length() {
        dotest("1293", false);
    }

    #[test]
    fn first_nine_chartacter_is_not_0_to_9() {
        dotest("XXXXXXXXXX", false);
    }
}
