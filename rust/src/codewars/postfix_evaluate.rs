fn postfix_evaluator(expr: &str) -> i64 {
    let mut stack = vec![];

    for i in expr.split(" ") {
        match i64::from_str_radix(&i, 10) {
            Ok(n) => {
                stack.push(n);
            }
            Err(_) => {
                if stack.len() < 2 {
                    continue;
                }

                let (b, a) = (stack.pop().unwrap(), stack.pop().unwrap());

                let v = match i {
                    "+" => a + b,
                    "-" => a - b,
                    "*" => a * b,
                    "/" => a / b,
                    _ => 0,
                };

                stack.push(v);
            }
        }
    }

    *stack.first().unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn simple_addition() {
        assert_eq!(postfix_evaluator("2 3 +"), 5);
    }

    #[test]
    fn addition_with_negative_numbers() {
        assert_eq!(postfix_evaluator("2 -3 +"), -1);
    }

    #[test]
    fn constant_numbers() {
        assert_eq!(postfix_evaluator("1"), 1);
        assert_eq!(postfix_evaluator("-1"), -1);
    }

    #[test]
    fn complex_expressions() {
        assert_eq!(postfix_evaluator("2 3 9 4 / + *"), 10);
        assert_eq!(postfix_evaluator("3 4 9 / *"), 0);
        assert_eq!(postfix_evaluator("4 8 + 6 5 - * 3 2 - 2 2 + * /"), 3);
    }

    #[test]
    fn multi_digit() {
        assert_eq!(postfix_evaluator("21 21 +"), 42);
    }
}
