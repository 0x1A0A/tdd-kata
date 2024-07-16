const MAX_FIB_SEQ: usize = 96;

fn product_fib(prod: u64) -> (u64, u64, bool) {
    let mut i: u64 = 1;
    loop {
        if i as usize >= MAX_FIB_SEQ {
            break;
        }

        let left = fibo(i - 1);
        let right = fibo(i);

        let mul = left * right;

        if mul == prod {
            return (left, right, true);
        }

        if mul > prod {
            return (left, right, false);
        }

        i += 1;
    }
    (0, 0, false)
}

fn fibo(n: u64) -> u64 {
    static mut FIB: [u64; MAX_FIB_SEQ] = [0; MAX_FIB_SEQ];

    unsafe {
        if n == 0 || n == 1 {
            FIB[0] = 1;
            FIB[1] = 1;
            return 1;
        }
        if FIB[n as usize] != 0 {
            return FIB[n as usize];
        }
        FIB[n as usize] = fibo(n - 1) + fibo(n - 2);
        return FIB[n as usize];
    }
}

#[cfg(test)]
mod test {
    fn dotest(prod: u64, exp: (u64, u64, bool)) -> () {
        assert_eq!(super::product_fib(prod), exp)
    }

    #[test]
    fn basics_product_fib() {
        dotest(4895, (55, 89, true));
        dotest(5895, (89, 144, false));
    }
}
