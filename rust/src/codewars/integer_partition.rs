use std::collections::HashMap;

type Partition = Vec<Vec<u64>>;

fn part(n: i64) -> String {
    let mut cache = HashMap::new();
    let product = products(&partitions(n as u64, &mut cache));

    let range = product[product.len() - 1] - product[0];
    let mean = product.iter().sum::<u64>() as f64 / product.len() as f64;
    let median = if product.len() % 2 == 1 {
        product[product.len() / 2] as f64
    } else {
        (product[product.len() / 2] + product[(product.len() / 2) - 1]) as f64 / 2.
    };

    format!("Range: {range} Average: {mean:.2} Median: {median:.2}")
}

fn partitions(n: u64, cache: &mut HashMap<u64, Partition>) -> Partition {
    if let Some(cached) = cache.get(&n) {
        return cached.clone();
    }

    if n == 0 {
        return vec![vec![]];
    }

    let mut res: Vec<Vec<u64>> = vec![];

    for i in 1..=n {
        for p in partitions(n - i, cache) {
            if p.is_empty() || i >= p[0] {
                let arr = vec![vec![i], p.clone()].concat();
                res.push(arr);
            }
        }
    }

    cache.insert(n, res.clone());

    res
}

fn products(v: &Vec<Vec<u64>>) -> Vec<u64> {
    let mut result = v
        .iter()
        .map(|a| a.iter().fold(1, |acc, y| acc * y))
        .collect::<Vec<_>>();

    result.sort();
    result.dedup();

    result
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    #[test]
    fn generate_partition() {
        let mut cache = HashMap::new();
        assert_eq!(super::partitions(1, &mut cache), vec![vec![1]]);
        assert_eq!(super::partitions(2, &mut cache), vec![vec![1, 1], vec![2],]);
        assert_eq!(
            super::partitions(3, &mut cache),
            vec![vec![1, 1, 1], vec![2, 1], vec![3]]
        );
        assert_eq!(
            super::partitions(4, &mut cache),
            vec![
                vec![1, 1, 1, 1],
                vec![2, 1, 1],
                vec![2, 2],
                vec![3, 1],
                vec![4]
            ]
        );
        assert_eq!(
            super::partitions(6, &mut cache),
            vec![
                vec![1, 1, 1, 1, 1, 1],
                vec![2, 1, 1, 1, 1],
                vec![2, 2, 1, 1],
                vec![2, 2, 2],
                vec![3, 1, 1, 1],
                vec![3, 2, 1],
                vec![3, 3],
                vec![4, 1, 1],
                vec![4, 2],
                vec![5, 1],
                vec![6]
            ]
        );
    }

    #[test]
    fn generate_products() {
        assert_eq!(
            super::products(&vec![
                vec![1, 1, 1, 1, 1, 1],
                vec![2, 1, 1, 1, 1],
                vec![2, 2, 1, 1],
                vec![2, 2, 2],
                vec![3, 1, 1, 1],
                vec![3, 2, 1],
                vec![3, 3],
                vec![4, 1, 1],
                vec![4, 2],
                vec![5, 1],
                vec![6]
            ]),
            vec![1, 2, 3, 4, 5, 6, 8, 9]
        );
    }

    fn testequal(ans: &str, sol: &str) {
        assert!(ans == sol, "Expected \"{}\", got \"{}\".", sol, ans);
    }

    #[test]
    fn interger_partition() {
        testequal(&super::part(1), "Range: 0 Average: 1.00 Median: 1.00");
        testequal(&super::part(2), "Range: 1 Average: 1.50 Median: 1.50");
        testequal(&super::part(3), "Range: 2 Average: 2.00 Median: 2.00");
        testequal(&super::part(4), "Range: 3 Average: 2.50 Median: 2.50");
        testequal(&super::part(5), "Range: 5 Average: 3.50 Median: 3.50");
    }
}
