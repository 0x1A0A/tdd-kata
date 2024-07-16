fn doubles(maxk: i32, maxn: i32) -> f64 {
    let mut sum = 0.;
    for k in 1..=maxk {
        for n in 1..=maxn {
            sum += 1. / (1. + n as f64).powf(2. * k as f64) / k as f64;
        }
    }

    sum
}

#[cfg(test)]
mod tests {
    use super::*;

    fn assert_float_equals(actual: f64, expected: f64, abs_tol: f64, rel_tol: f64) {
        let abs_diff = (actual - expected).abs();
        let rel_diff = abs_diff / expected.abs();
        assert!(
            abs_diff <= abs_tol || rel_diff <= rel_tol,
            "Expected value must be near: {:e} but was: {:e}",
            expected,
            actual
        );
    }

    fn dotest(maxk: i32, maxn: i32, exp: f64) -> () {
        let abs_tol = 1.0e-12;
        let rel_tol = 1.0e-12;
        assert_float_equals(doubles(maxk, maxn), exp, abs_tol, rel_tol);
    }

    #[test]
    fn basic_tests_doubles() {
        dotest(1, 10, 0.5580321939764581);
        dotest(10, 1000, 0.6921486500921933);
        dotest(10, 10000, 0.6930471674194457);
    }
}
