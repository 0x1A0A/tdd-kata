use std::collections::HashMap;

fn decomp(n: i32) -> String {
    let mut hash = HashMap::<i32, i32>::new();

    for i in 2..=n {
        let factors = prime_factors(i as u64);
        for p in factors {
            match hash.get(&(p as i32)) {
                None => hash.insert(p as i32, 1),
                Some(x) => hash.insert(p as i32, x + 1),
            };
        }
    }

    let mut keys = hash.keys().collect::<Vec<_>>();
    keys.sort();

    let mut result: Vec<String> = vec![];

    for &k in keys.iter() {
        let v = *hash.get(k).unwrap();
        if v == 1 {
            result.push(format!("{k}"));
        } else {
            result.push(format!("{k}^{v}"));
        }
    }

    result.join(" * ")
}

fn prime_factors(mut n: u64) -> Vec<u64> {
    let mut i = 2;
    let mut factors = vec![];
    while i * i <= n {
        if n % i != 0 {
            i += 1;
        } else {
            n /= i;
            let mut primes = prime_factors(i);
            factors.append(&mut primes);
        }
    }

    if n > 1 {
        factors.push(n);
    }

    factors
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
