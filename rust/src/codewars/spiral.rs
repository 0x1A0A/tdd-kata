// TODO: Refactor 
fn spiralize(size: usize) -> Vec<Vec<i8>> {
    let mut res = vec![vec![]; size];
    res.fill(vec![0; size]);

    let mut walk = size - 1;

    const DIR: [[i32; 2]; 4] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let mut pos = [0_i32, 0_i32];
    let mut dir = 0;

    for i in 0..size {
        if i & 1 == 1 {
            walk -= if i < 3 { 0 } else { 2 }
        }

        res[pos[0] as usize][pos[1] as usize] = 1;
        pos[0] += DIR[dir][0];
        pos[1] += DIR[dir][1];

        for _ in 0..walk - 1 {
            res[pos[0] as usize][pos[1] as usize] = 1;
            pos[0] += DIR[dir][0];
            pos[1] += DIR[dir][1];
        }

        dir += 1;
        dir %= 4;
    }
    res[pos[0] as usize][pos[1] as usize] = 1;

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test5() {
        assert_eq!(
            spiralize(5),
            [
                [1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1],
                [1, 1, 1, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1],
            ],
        );
    }

    #[test]
    fn test8() {
        assert_eq!(
            spiralize(8),
            [
                [1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1],
            ],
        );
    }
}
