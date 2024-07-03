fn to_camel_case(str: &str) -> String {
    str.split(|x| x == '-' || x == '_')
        .enumerate()
        .map(|(i, x)| {
            if i == 0 {
                return x.to_string();
            }
            x.bytes()
                .enumerate()
                .map(|(ii, c)| {
                    if ii == 0 {
                        (c as char).to_uppercase().to_string()
                    } else {
                        (c as char).to_string()
                    }
                })
                .collect::<Vec<_>>()
                .join("")
                .to_string()
        })
        .collect::<Vec<_>>()
        .join("")
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
