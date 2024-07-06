fn revrot(s: &str, c: usize) -> String {
    if s.is_empty() || c == 0 || s.len() < c {
        return "".into();
    }

    s.chars()
        .collect::<Vec<_>>()
        .chunks_exact(c)
        .map(|x| {
            let mut vec = x.to_vec();
            let sum = x
                .iter()
                .map(|&c| c as u8 - '0' as u8)
                .map(|c| c as usize)
                .sum::<usize>();

            if sum & 1 == 0 {
                vec.reverse();
            } else {
                vec.rotate_left(1);
            }

            String::from_utf8(vec.iter().map(|&c| c as u8).collect()).unwrap()
        })
        .collect::<Vec<_>>()
        .join("")
}

#[cfg(test)]
mod tests {
    fn testing(s: &str, c: usize, exp: &str) -> () {
        assert_eq!(&super::revrot(s, c), exp)
    }

    #[test]
    fn basics_revrot() {
        testing("1234", 0, "");
        testing("", 0, "");
        testing("1234", 5, "");
        let s = "733049910872815764";
        testing(s, 5, "330479108928157");
        let s = "73304991087281576455176044327690580265896";
        testing(s, 8, "1994033775182780067155464327690480265895");
    }
}
