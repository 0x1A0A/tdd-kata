struct PaginationHelper<T> {
    data: Vec<T>,
    width: usize,
}

impl<T> PaginationHelper<T> {
    fn new(collection: Vec<T>, items_per_page: usize) -> Self {
        Self {
            data: collection,
            width: items_per_page,
        }
    }

    fn item_count(&self) -> usize {
        self.data.len()
    }

    fn page_count(&self) -> usize {
        let len = self.data.len() as f32;
        (len / self.width as f32).ceil() as usize
    }

    fn page_item_count(&self, page_index: usize) -> Option<usize> {
        let len = self.data.len();
        let bottom = (page_index * self.width).clamp(0, len);
        let top = (bottom + self.width).clamp(0, len);
        match top - bottom {
            0 => None,
            x => Some(x),
        }
    }

    fn page_index(&self, item_index: usize) -> Option<usize> {
        let page_count = self.page_count();
        if page_count == 0 || item_index >= self.data.len() {
            return None;
        }
        let page = item_index / self.width;
        match page {
            x if x <= page_count => Some(page),
            _ => None,
        }
    }
}

#[cfg(test)]
mod sample_tests {
    use super::PaginationHelper;

    #[test]
    fn test_item_count() {
        let helper = PaginationHelper::new(vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);
        assert_eq!(helper.item_count(), 11);
    }

    #[test]
    fn test_page_count() {
        let helper = PaginationHelper::new(vec!['a', 'b', 'c', 'd', 'e', 'f'], 4);
        assert_eq!(helper.page_count(), 2);
    }

    #[test]
    fn test_page_item_count() {
        let helper = PaginationHelper::new((1..=24).collect(), 10);
        assert_eq!(helper.page_item_count(1), Some(10));
        assert_eq!(helper.page_item_count(2), Some(4));
    }

    #[test]
    fn test_page_index() {
        let helper = PaginationHelper::new((1..=24).collect(), 10);
        assert_eq!(helper.page_index(40), None);
        assert_eq!(helper.page_index(22), Some(2));
    }

    #[test]
    fn test_page_index_large() {
        let helper = PaginationHelper::new((1..=99).collect(), 8);
        assert_eq!(helper.page_index(99), None);
    }

    #[test]
    fn test_page_index_no_item() {
        let helper = PaginationHelper::<i32>::new(vec![], 10);
        assert_eq!(helper.page_index(0), None);
        assert_eq!(helper.page_index(40), None);
    }
}
