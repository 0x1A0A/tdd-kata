fn good_vs_evil(good: &str, evil: &str) -> String {
    let good_worth = [1, 2, 3, 3, 4, 10];
    let evil_worth = [1, 2, 2, 2, 3, 5, 10];
    let good_score: usize = good
        .split_whitespace()
        .enumerate()
        .map(|(i, x)| good_worth[i] * usize::from_str_radix(x, 10).unwrap())
        .sum();
    let evil_score: usize = evil
        .split_whitespace()
        .enumerate()
        .map(|(i, x)| evil_worth[i] * usize::from_str_radix(x, 10).unwrap())
        .sum();

    match good_score.cmp(&evil_score) {
        std::cmp::Ordering::Less => "Battle Result: Evil eradicates all trace of Good".into(),
        std::cmp::Ordering::Equal => "Battle Result: No victor on this battle field".into(),
        std::cmp::Ordering::Greater => "Battle Result: Good triumphs over Evil".into(),
    }
}

#[test]
fn returns_expected() {
    assert_eq!(
        good_vs_evil("0 0 0 0 0 10", "0 0 0 0 0 0 0"),
        "Battle Result: Good triumphs over Evil"
    );
    assert_eq!(
        good_vs_evil("0 0 0 0 0 0", "0 0 0 0 0 0 10"),
        "Battle Result: Evil eradicates all trace of Good"
    );
    assert_eq!(
        good_vs_evil("0 0 0 0 0 10", "0 0 0 0 0 0 10"),
        "Battle Result: No victor on this battle field"
    );
}
