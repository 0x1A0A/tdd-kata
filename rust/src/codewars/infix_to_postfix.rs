use num::Zero;

fn ops_precedence(c: char) -> i32 {
    match c {
        '+' | '-' => 1,
        '*' | '/' => 2,
        '^' => 3,
        _ => 0,
    }
}

fn to_postfix(infix: &str) -> String {
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
            while let Some(last) = stack.pop() {
                match last {
                    '(' => break,
                    x => postfix.push(x),
                }
            }
            continue;
        }

        let now = ops_precedence(s);

        while let Some(last) = stack.last() {
            let last = ops_precedence(*last);

            if last.is_zero() {
                break;
            }

            if last.lt(&now) {
                break;
            }

            if last.eq(&now) && s.eq(&'^') {
                break;
            }

            postfix.push(stack.pop().unwrap());
        }

        stack.push(s);
    }

    postfix.extend(stack.iter().rev());

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
    fn simple_precedence() {
        do_test(&to_postfix("2+7*5"), "275*+");
    }

    #[test]
    fn add_and_multiplication() {
        do_test(&to_postfix("3*7+1)"), "37*1+");
        do_test(&to_postfix("3*7+7/7)"), "37*77/+");
    }

    #[test]
    fn bracket() {
        do_test(&to_postfix("3*3/(7+1)"), "33*71+/");
        do_test(&to_postfix("5+(6-2)*9+3^(7-1)"), "562-9*+371-^+");
        do_test(&to_postfix("(5-4-1)+9/5/2-7/1/7"), "54-1-95/2/+71/7/-");
    }

    #[test]
    fn exponential() {
        do_test(&to_postfix("1^2^3"), "123^^");
    }
}
