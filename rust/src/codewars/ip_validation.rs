fn is_valid_ip(str: &str) -> bool {
    if str.as_bytes().iter().any(|x| x.is_ascii_whitespace()) {
        return false;
    }
    let mut count = 0;
    for ip in str.split(".").into_iter() {
        count += 1;
        if count > 4 {
            return false;
        }

        if ip.len() > 1 && ip.starts_with("0") {
            return false;
        }

        match u8::from_str_radix(ip, 10) {
            Ok(_) => {}
            Err(_) => return false,
        }
    }

    if count == 4 {
        true
    } else {
        false
    }
}

#[cfg(test)]
mod tests {
    use super::is_valid_ip;

    #[test]
    fn sample_test() {
        assert!(is_valid_ip("0.0.0.0"));
        assert!(is_valid_ip("12.255.56.1"));
        assert!(is_valid_ip("137.255.156.100"));

        assert!(!is_valid_ip(""));
        assert!(!is_valid_ip("abc.def.ghi.jkl"));
        assert!(!is_valid_ip("123.456.789.0"));
        assert!(!is_valid_ip("12.34.56"));
        assert!(!is_valid_ip("01.02.03.04"));
        assert!(!is_valid_ip("256.1.2.3"));
        assert!(!is_valid_ip("1.2.3.4.5"));
        assert!(!is_valid_ip("123,45,67,89"));
        assert!(!is_valid_ip("1e0.1e1.1e2.2e2"));
        assert!(!is_valid_ip(" 1.2.3.4"));
        assert!(!is_valid_ip("1.2.3.4 "));
        assert!(!is_valid_ip("12.34.56.-7"));
        assert!(!is_valid_ip("1.2.3.4\n"));
        assert!(!is_valid_ip("\n1.2.3.4"));
    }
}
