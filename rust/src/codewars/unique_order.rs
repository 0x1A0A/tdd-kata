fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
where
    T: std::iter::IntoIterator,
    T::Item: std::cmp::PartialEq + std::fmt::Debug,
{
    let mut result = sequence.into_iter().collect::<Vec<_>>();
    result.dedup();
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
