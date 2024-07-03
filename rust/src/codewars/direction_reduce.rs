#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Direction {
    North,
    East,
    West,
    South,
}

fn dir_reduc(arr: &[Direction]) -> Vec<Direction> {
    let mut stack = vec![];

    for &dir in arr.iter() {
        match (dir, stack.last()) {
            (Direction::North, Some(Direction::South))
            | (Direction::South, Some(Direction::North))
            | (Direction::East, Some(Direction::West))
            | (Direction::West, Some(Direction::East)) => {
                stack.pop();
            }
            _ => {
                stack.push(dir);
            }
        }
    }

    stack
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
