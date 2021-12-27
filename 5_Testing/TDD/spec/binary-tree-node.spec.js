const {BinaryTreeNode} = require('../app/binary-tree-node');
const {BinaryTreeOps} = require('../app/binary-tree-ops');

describe("BinaryTreeOps", () => {
    let testTree;

    beforeEach (() => {
        testTree = new BinaryTreeNode(4,
                            new BinaryTreeNode(6,
                                new BinaryTreeNode(2),
                                new BinaryTreeNode(1)),
                    new BinaryTreeNode(3))
    })
})

it("should paint the tree's value using in-order traversal", () => {
    let results = BinaryTreeOps.inOrder(testTree);
    expect(results).toCointain("2 6 1 4 3");
});

it("should paint the tree's value using pre-order traversal", () => {
    let results = BinaryTreeOps.preOrder(testTree);
    expect(results).toCointain("4 6 2 1 3");
});

it("should paint the tree's value using post-order traversal", () => {
    let results = BinaryTreeOps.postOrder(testTree);
    expect(results).toCointain("2 1 6 3 4");
});

