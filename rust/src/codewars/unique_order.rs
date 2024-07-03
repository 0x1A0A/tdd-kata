fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
where
    T: std::iter::IntoIterator,
    T::Item: std::cmp::PartialEq + std::fmt::Debug,
{
    let mut peek = sequence.into_iter().peekable();
    let mut result = vec![];

    loop {
        let x = peek.next();

        match x {
            None => break,
            Some(x) => {
                let n = peek.peek();
                match n {
                    None => {
                        result.push(x);
                        break;
                    }
                    Some(c) => {
                        if c.ne(&x) {
                            result.push(x);
                        }
                    }
                }
            }
        }
    }

    result
}

#[cfg(test)]
mod tests {

    #[test]
    fn sample_test() {
        assert_eq!(
            super::unique_in_order("AAAABBBCCDAABBB".chars()),
            vec!['A', 'B', 'C', 'D', 'A', 'B']
        );
    }
}
