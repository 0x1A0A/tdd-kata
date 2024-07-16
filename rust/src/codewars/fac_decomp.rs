fn decomp(n: i32) -> String {
    let mut primes = vec![];
    let mut counts = vec![];

    for i in 2..=n {
        let mut x = i;
        for (j, prime) in primes.iter().enumerate() {
            while x % prime == 0 {
                counts[j] += 1;
                x /= prime;
            }
        }
        if x > 1 {
            primes.push(x);
            counts.push(1);
        }
    }

    primes
        .iter()
        .zip(counts.iter())
        .map(|(&prime, &count)| {
            if count == 1 {
                format!("{prime}")
            } else {
                format!("{prime}^{count}")
            }
        })
        .collect::<Vec<_>>()
        .join(" * ")
}

#[cfg(test)]
mod tests {
    use super::*;

    fn dotest(n: i32, exp: &str) -> () {
        println!("n:{:?}", n);
        let ans = decomp(n);
        println!("actual: {:?}", ans);
        println!("expect: {:?}", exp.to_string());
        println!("{}", ans == exp.to_string());
        assert_eq!(ans, exp.to_string());
        println!("{}", "-");
    }

    #[test]
    fn basic_tests() {
        dotest(17, "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17");
        dotest(5, "2^3 * 3 * 5");
        dotest(22, "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19");
        dotest(14, "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13");
        dotest(25, "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23");
    }
}
