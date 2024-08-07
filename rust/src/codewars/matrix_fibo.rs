use num::bigint::BigInt;

fn fib(n: i32) -> BigInt {
    fib_iter(1.into(), 0.into(), 0.into(), 1.into(), n.abs())
        * if n < 0 && n % 2 == 0 { -1 } else { 1 }
}

fn fib_iter(a: BigInt, b: BigInt, p: BigInt, q: BigInt, count: i32) -> BigInt {
    if count == 0 {
        return b;
    }

    if count % 2 == 0 {
        let pp = p.pow(2);
        let qq = q.pow(2);
        let new_q = 2 * p.clone() * q.clone() + q.pow(2);
        fib_iter(a, b, pp + qq, new_q, count / 2)
    } else {
        let new_a = a.clone() * (p.clone() + q.clone()) + b.clone() * q.clone();
        let new_b = a.clone() * q.clone() + b.clone() * p.clone();
        fib_iter(new_a, new_b, p, q, count - 1)
    }
}

#[cfg(test)]
mod sample_tests {
    use super::fib;
    use num::bigint::BigInt;
    use num::traits::{One, Zero};
    use std::str::FromStr;

    fn dotest(n: i32, expected: BigInt) {
        let actual = fib(n);
        assert!(
            actual == expected,
            "Test failed with n = {n}\nExpected \"{expected:?}\"\nBut got \"{actual:?}\""
        )
    }

    #[test]
    fn small_positive_numbers() {
        dotest(0, BigInt::zero());
        dotest(1, BigInt::one());
        dotest(2, BigInt::one());
        dotest(3, BigInt::from(2));
        dotest(4, BigInt::from(3));
        dotest(5, BigInt::from(5));
        dotest(96, BigInt::from_str("51680708854858323072").unwrap());
    }

    // TODO: handle nagative case
    #[test]
    fn small_negative_numbers() {
        dotest(-1, BigInt::from(1));
        dotest(-6, BigInt::from(-8));
        dotest(-96, BigInt::from_str("-51680708854858323072").unwrap());
    }

    #[test]
    fn large_numbers() {
        dotest(
            -500,
            BigInt::from_str("-139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125")
            .unwrap()
        );

        dotest(
            1000,
            BigInt::from_str("43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875")
            .unwrap()
        );
    }
}
