fn find_missing(seq: &[i32]) -> i32 {
    let gap = seq[1] - seq[0];

    for i in 1..seq.len() {
        let new_gap = seq[i] - seq[i - 1];
        match new_gap.abs().cmp(&gap.abs()) {
            std::cmp::Ordering::Less => {
                return seq[i - 2] + new_gap;
            }
            std::cmp::Ordering::Greater => {
                return seq[i - 1] + gap;
            }
            std::cmp::Ordering::Equal => {}
        }
    }

    seq[0]
}

#[cfg(test)]
mod tests {
    use super::find_missing;

    const ERR_MSG: &str = "\nYour result (left) did not match the expected output (right)";

    fn dotest(a: &[i32], expected: i32) {
        assert_eq!(find_missing(a), expected, "{ERR_MSG} with seq = {a:?}")
    }

    #[test]
    fn fixed_tests() {
        dotest(&[1, 2, 3, 4, 6, 7, 8, 9], 5);
        dotest(&[1, 3, 4, 5, 6, 7, 8, 9], 2);
        dotest(&[70827, 70827, 70827, 70827, 70827, 70827], 70827);
    }

    #[test]
    fn failed_case() {
        let case = [
            481131, 481049, 481008, 480967, 480926, 480885, 480844, 480803, 480762, 480721, 480680,
            480639, 480598, 480557, 480516, 480475, 480434, 480393, 480352, 480311, 480270, 480229,
            480188, 480147, 480106, 480065, 480024, 479983, 479942, 479901, 479860, 479819, 479778,
            479737, 479696, 479655,
        ];
        dotest(&case, 481090);
    }

    #[test]
    fn negative_gap() {
        let case = [5, 3, 2, 1];
        dotest(&case, 4);
        let case = [5, 4, 2, 1];
        dotest(&case, 3);
    }
}
