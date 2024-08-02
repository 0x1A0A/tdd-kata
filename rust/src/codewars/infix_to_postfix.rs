use std::collections::HashMap;

fn to_postfix(infix: &str) -> String {
    let precedence = HashMap::from([('+', 2), ('-', 2), ('*', 1), ('/', 1), ('^', 0)]);

    let mut stack = vec![];
    let mut postfix = "".to_owned();

    for s in infix.chars() {
        if s.is_numeric() {
            postfix.push(s);
            continue;
        }

        if s == '(' {
            stack.push(s);
            continue;
        }

        if s == ')' {
            loop {
                match stack.pop() {
                    None | Some('(') => break,
                    Some(x) => postfix.push(x),
                }
            }
            continue;
        }

        let now = precedence.get(&s).unwrap();

        loop {
            let last = stack.last();

            if last.is_none() {
                break;
            }

            let last = last.unwrap();

            if last == &'(' {
                break;
            }

            let last = precedence.get(last).unwrap();

            if *last == 0 && *now == 0 {
                break;
            }

            if last > now {
                break;
            }

            let last = stack.pop().unwrap();
            postfix.push(last);
        }

        stack.push(s);
    }

    loop {
        if let Some(c) = stack.pop() {
            postfix.push(c);
        } else {
            break;
        }
    }

    postfix
}

#[cfg(test)]
mod tests {
    use super::to_postfix;

    fn do_test(actual: &str, expected: &str) {
        assert_eq!(
            actual, expected,
            "\nYour answer (left) is not the correct answer (right)"
        )
    }

    #[test]
    fn fixed_tests() {
        do_test(&to_postfix("2+7*5"), "275*+");
        do_test(&to_postfix("3*3/(7+1)"), "33*71+/");
        do_test(&to_postfix("5+(6-2)*9+3^(7-1)"), "562-9*+371-^+");
        do_test(&to_postfix("(5-4-1)+9/5/2-7/1/7"), "54-1-95/2/+71/7/-");
        do_test(&to_postfix("1^2^3"), "123^^");
    }
}
