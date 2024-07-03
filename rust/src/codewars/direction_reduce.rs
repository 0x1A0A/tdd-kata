#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Direction {
    North,
    East,
    West,
    South,
}

fn dir_reduc(arr: &[Direction]) -> Vec<Direction> {
    let mut result = arr.iter().map(|x| Some(*x)).collect::<Vec<_>>();
    loop {
        let mut stop = true;
        let mut i = 0;
        loop {
            if result.len() == 0 || i >= result.len() - 1 {
                break;
            }
            match (result[i], result[i + 1]) {
                (Some(Direction::North), Some(Direction::South))
                | (Some(Direction::South), Some(Direction::North))
                | (Some(Direction::East), Some(Direction::West))
                | (Some(Direction::West), Some(Direction::East)) => {
                    result[i] = None;
                    result[i + 1] = None;
                    stop = false;
                }
                _ => {}
            }
            i += 1;
        }
        result = result
            .iter()
            .filter(|x| x.is_some())
            .map(|x| *x)
            .collect::<Vec<_>>();
        if stop {
            break;
        }
    }
    result.iter().filter_map(|x| *x).collect()
}

#[cfg(test)]
mod tests {

    use super::Direction::*;

    #[test]
    fn basic() {
        let a = [North, South, South, East, West, North, West];
        assert_eq!(super::dir_reduc(&a), [West]);

        let a = [North, West, South, East];
        assert_eq!(super::dir_reduc(&a), [North, West, South, East]);
    }

    #[test]
    fn over_flow() {
        let a = [];
        assert_eq!(super::dir_reduc(&a), []);
    }
}
