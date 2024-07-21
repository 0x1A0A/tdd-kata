fn determinant(matrix: &[Vec<i64>]) -> i64 {
    match matrix.len() {
        0 => 0,
        1 => matrix[0][0],
        2 => matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0],
        _ => {
            let mut result = 0;
            for (i, v) in matrix.iter().enumerate() {
                let det = v[0] * determinant(&minor(matrix, i));
                result += det * if i % 2 == 0 { 1 } else { -1 };
            }
            result
        }
    }
}

fn minor(matrix: &[Vec<i64>], row: usize) -> Vec<Vec<i64>> {
    let mut arr: Vec<Vec<i64>> = vec![];

    for (index, v) in matrix.iter().enumerate() {
        if index == row {
            continue;
        }

        let v = &v[1..];
        arr.push(v.to_vec());
    }

    arr
}

#[cfg(test)]
mod tests {
    use super::determinant;

    const ERR_MSG: &str = "\nYour result (left) did not match the expected output (right)";

    fn dotest(a: &[Vec<i64>], expected: i64) {
        assert_eq!(determinant(a), expected, "{ERR_MSG}")
    }

    #[test]
    fn get_minor_matrix() {
        assert_eq!(
            super::minor(&[vec![2, 5, 3], vec![1, -2, -1], vec![1, 3, 4]], 0),
            vec![vec![-2, -1], vec![3, 4],]
        );
        assert_eq!(
            super::minor(
                &[
                    vec![2, 5, 3, 1],
                    vec![1, -2, 1, -1],
                    vec![1, 3, 1, 4],
                    vec![0, 8, 1, 7]
                ],
                2
            ),
            vec![vec![5, 3, 1], vec![-2, 1, -1], vec![8, 1, 7]]
        );
    }

    #[test]
    fn calculate_det() {
        dotest(&[vec![1]], 1);
        dotest(&[vec![1, 3], vec![2, 5]], -1);
        dotest(&[vec![2, 5, 3], vec![1, -2, -1], vec![1, 3, 4]], -20);
    }
}
