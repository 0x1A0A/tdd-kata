fn sq_in_rect(lng: i32, wdth: i32) -> Option<Vec<i32>> {
    let mut result = vec![];

    if wdth == 0 || lng == 0 || wdth == lng {
        return None;
    }

    let mut width = wdth;
    let mut length = lng;

    loop {
        match width.cmp(&length) {
            std::cmp::Ordering::Less => {
                result.push(width);
                length -= width;
            }
            std::cmp::Ordering::Equal => {
                result.push(width);
                break;
            }
            std::cmp::Ordering::Greater => {
                result.push(length);
                width -= length;
            }
        }
    }

    Some(result)
}

#[cfg(test)]
mod test {
    fn testing(lng: i32, wdth: i32, exp: Option<Vec<i32>>) -> () {
        assert_eq!(super::sq_in_rect(lng, wdth), exp)
    }

    #[test]
    fn tests_sq_in_rect() {
        testing(5, 3, Some(vec![3, 2, 1, 1]));
        testing(3, 5, Some(vec![3, 2, 1, 1]));
        testing(5, 5, None);
    }
}
