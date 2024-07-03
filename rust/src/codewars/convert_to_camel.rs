fn to_camel_case(str: &str) -> String {
    str.split(|x| x == '-' || x == '_')
        .enumerate()
        .map(|(i, x)| match i {
            0 => x.to_string(),
            _ => x[..1].to_uppercase() + &x[1..],
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::to_camel_case;

    const ERR_MSG: &str = "\nYour result (left) did not match the expected output (right)";

    fn dotest(s: &str, expected: &str) {
        assert_eq!(to_camel_case(s), expected, "{ERR_MSG} with text = \"{s}\"")
    }

    #[test]
    fn fixed_tests() {
        dotest("", "");
        dotest("the_stealth_warrior", "theStealthWarrior");
        dotest("The-Stealth-Warrior", "TheStealthWarrior");
        dotest("A-B-C", "ABC");
    }
}
