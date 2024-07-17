struct Node {
    value: u32,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}

impl Node {
    fn new(value: u32) -> Self {
        Self {
            value,
            left: None,
            right: None,
        }
    }

    fn left(mut self, node: Node) -> Self {
        self.left = Some(Box::new(node));
        self
    }

    fn right(mut self, node: Node) -> Self {
        self.right = Some(Box::new(node));
        self
    }
}

fn tree_by_levels(root: &Node) -> Vec<u32> {
    let mut queue = vec![];
    let mut result = vec![];
    queue.push(root);

    while !queue.is_empty() {
        let mut new: Vec<&Node> = vec![];
        for &node in queue.iter() {
            result.push(node.value);
            if let Some(n) = &node.left {
                new.push(n);
            }
            if let Some(n) = &node.right {
                new.push(n);
            }
        }

        queue = new;
    }

    result
}

#[cfg(test)]
mod sample_tests {
    use super::*;

    #[test]
    fn root_only() {
        assert_eq!(
            tree_by_levels(&Node::new(42)),
            [42],
            "\nYour result (left) didn't match the expected output (right)."
        );
    }

    #[test]
    fn complete_tree() {
        let root = Node::new(1)
            .left(Node::new(2).left(Node::new(4)).right(Node::new(5)))
            .right(Node::new(3).left(Node::new(6)));
        assert_eq!(
            tree_by_levels(&root),
            [1, 2, 3, 4, 5, 6],
            "\nYour result (left) didn't match the expected output (right)."
        );
    }

    #[test]
    fn unbalanced_tree() {
        let root = Node::new(1).left(Node::new(2).left(Node::new(4).right(Node::new(5))));
        assert_eq!(
            tree_by_levels(&root),
            [1, 2, 4, 5],
            "\nYour result (left) didn't match the expected output (right)."
        );
    }
}
