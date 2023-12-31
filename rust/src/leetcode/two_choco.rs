struct Solution;

impl Solution {
    pub fn buy_choco(prices: Vec<i32>, money: i32) -> i32 {
        let mut sorted :Vec<i32> = prices.clone();
        sorted.sort();
        let price = sorted[0] + sorted[1]; 
        if money - price >= 0 { money - price } else { money }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn return_money_if_cannot_buy() {
        assert_eq!(Solution::buy_choco(vec![1,2,3,4], 2), 2);
    }

    #[test]
    fn return_remain_if_can_buy() {
        assert_eq!(Solution::buy_choco(vec![1,2,3,4], 4), 1);
    }
}
