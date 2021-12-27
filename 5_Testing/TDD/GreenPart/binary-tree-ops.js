//Esta parte no funciona en el testing

const {BinaryTreeNode} = require('./binary-tree-node');

class BinaryTreeOps {
    static InOrder(root) {
        let results = "";
        traverseInOrder(root);
        return results;

        function traverseInOrder(root) {
            if(!root) {
                return;
            }
            traverseInOrder(root.left);
            results += `${root.value}`;
            traverseInOrder(root.right);
        }
    }

    static preOrder(root) {
        let results = "";
        traversePreOrder(root);
        return results;

        function traversePreOrder(root) {
            if(!root) {
                return;
            }
            results += `${root.value}`;
            traversePreOrder(root.left);
            traversePreOrder(root.right);
}
    }

static postOrder(root) {
    let results = "";
    traversePostOrder(root);
    return results;

    function traversePostOrder(root) {
        if(!root) {
            return;
        }
        traversePostOrder(root.left);
        traversePostOrder(root.right);
        results += `${root.value}`;
}
}
}

module.exports = {
    BinaryTreeOps
}