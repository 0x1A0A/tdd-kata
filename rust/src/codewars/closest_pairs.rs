type Point = (f64, f64);
type Points = [Point];
type Pair = (Point, Point);

fn distance_point(a: &Point, b: &Point) -> f64 {
    let x = a.0 - b.0;
    let y = a.1 - b.1;
    (x.powf(2.) + y.powf(2.)).sqrt()
}

fn closest(points: &Points) -> Option<Pair> {
    if points.len().lt(&2) {
        return None;
    }
    let mut pair = None;
    let mut distance = f64::MAX;
    for (index, a) in points.iter().enumerate() {
        for b in points.iter().skip(index + 1) {
            let d = distance_point(a, b);
            if d < distance {
                distance = d;
                pair = Some((*a, *b));
            }
        }
    }
    pair
}

fn divide(point_x: &Points, point_y: &Points) -> Pair {
    if point_x.len().le(&3) {
        return closest(point_x).unwrap();
    }

    let mid_index = point_x.len() / 2;
    let mid_point = point_x[mid_index];
    let left = &point_x[..mid_index];
    let right = &point_x[mid_index..];

    let left_y = point_y
        .iter()
        .filter(|p| p.0 < mid_point.0)
        .map(|p| *p)
        .collect::<Vec<_>>();
    let right_y = point_y
        .iter()
        .filter(|p| p.0 >= mid_point.0)
        .map(|p| *p)
        .collect::<Vec<_>>();

    let min_left = divide(left, &left_y);
    let min_right = divide(right, &right_y);
    let d_left = distance_point(&min_left.0, &min_left.1);
    let d_right = distance_point(&min_right.0, &min_right.1);

    let mut min = match d_left.total_cmp(&d_right) {
        std::cmp::Ordering::Less => min_left,
        _ => min_right,
    };

    let mut d_min = distance_point(&min.0, &min.1);

    let mid_y = point_y
        .iter()
        .filter(|p| (p.0 - mid_point.0).abs() < d_min)
        .collect::<Vec<_>>();

    for (index, &a) in mid_y.iter().enumerate() {
        for &b in mid_y.iter().skip(index + 1) {
            if (a.1 - b.1).abs() >= d_min {
                break;
            }
            let d = distance_point(a, b);
            if d < d_min {
                d_min = d;
                min = (*a, *b);
            }
        }
    }

    min
}

fn closest_pair(points: &Points) -> Pair {
    let mut sort_x = points.to_vec();
    sort_x.sort_by(|b, a| b.0.total_cmp(&a.0));
    let mut sort_y = points.to_vec();
    sort_y.sort_by(|b, a| b.1.total_cmp(&a.1));

    divide(&sort_x, &sort_y)
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

    #[test]
    fn tiny_case() {
        let points = [
            (0.6961860261010713, 0.6550408628769457),
            (0.2904014427224935, 0.3540910176463483),
            (0.4758244601656004, 0.38432418964174475),
            (0.6704996626723165, 0.5641171427119818),
            (0.5859261327786845, 0.5609146497384001),
            (0.5534394555761617, 0.48226718400834834),
            (0.6584450367459522, 0.33480448638711274),
            (0.26699035172964347, 0.4939715170415534),
            (0.5964749362583084, 0.6687186135079451),
            (0.2759357423064446, 0.5673766101927573),
            (0.2892319073050201, 0.6536439725640043),
            (0.40900238345326306, 0.5451726232632629),
            (0.6773180082845853, 0.4613089641790835),
            (0.40374269684206754, 0.7882626504062689),
            (0.4849530890500717, 0.5830127643534956),
            (0.30718534647687457, 0.7514162401430386),
            (0.6035135270781656, 0.752472878684387),
            (0.6616750938826902, 0.7629310609116149),
            (0.36106445022383293, 0.4921334931416751),
            (0.4803685622319966, 0.6814366123491665),
            (0.4524975467033985, 0.47625962465532984),
            (0.39554978306999033, 0.6899873958681764),
            (0.46374779079897754, 0.7488683353231576),
            (0.393570717131008, 0.5495992052110255),
            (0.5561975849667411, 0.35733634781809764),
            (0.3469466979026626, 0.3505391973670339),
        ];

        let pair = closest_pair(&points);
        verify(
            pair,
            (
                (0.393570717131008, 0.5495992052110255),
                (0.40900238345326306, 0.5451726232632629),
            ),
        );
    }
}
