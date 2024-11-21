type Point = (f64, f64);
type Pair = (Point, Point);

fn distance_squared(a: &Point, b: &Point) -> f64 {
    let x = a.0 - b.0;
    let y = a.1 - b.1;
    x.powf(2.) + y.powf(2.)
}

fn closest(points: &[Point]) -> Option<Pair> {
    if points.len().lt(&2) {
        return None;
    }
    let mut pair = None;
    let mut distance = f64::MAX;
    for (index, a) in points.iter().enumerate() {
        for b in points.iter().skip(index + 1) {
            let d = distance_squared(a, b);
            if d < distance {
                distance = d;
                pair = Some((*a, *b));
            }
        }
    }
    pair
}

fn closest_pair(points: &[(f64, f64)]) -> ((f64, f64), (f64, f64)) {
    closest(points).unwrap_or(((0.0, 0.0), (0.0, 0.0)))
}

#[cfg(test)]
mod tests {
    use super::{closest_pair, Pair};

    fn verify(actual: Pair, expected: Pair) {
        if actual == expected || (actual.0 == expected.1 && actual.1 == expected.0) {
            assert!(true)
        } else {
            assert_eq!(actual, expected)
        }
    }

    #[test]
    fn find_closets_pair() {
        let mut pair = closest_pair(&[(2.0, 2.0), (6.0, 3.0)]);
        verify(pair, ((2.0, 2.0), (6.0, 3.0)));

        pair = closest_pair(&[
            (2.0, 2.0),
            (2.0, 8.0),
            (5.0, 5.0),
            (6.0, 3.0),
            (6.0, 7.0),
            (7.0, 4.0),
            (7.0, 9.0),
        ]);
        verify(pair, ((6.0, 3.0), (7.0, 4.0)));

        pair = closest_pair(&[
            (2.0, 2.0),
            (2.0, 8.0),
            (5.0, 5.0),
            (5.0, 5.0),
            (6.0, 3.0),
            (6.0, 7.0),
            (7.0, 4.0),
            (7.0, 9.0),
        ]);
        verify(pair, ((5.0, 5.0), (5.0, 5.0)));
    }
}
