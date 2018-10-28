function treeToArray(tree) {
    const array = [];
    const graphTraversal = function BFS(treeNode, level) {
      if (!array[level]) array[level] = [];
      array[level].push(treeNode.value);
      const innerLevel = level + 1;
      if (treeNode.left) {
        BFS(treeNode.left, innerLevel);
      }
      if (treeNode.right) {
        BFS(treeNode.right, innerLevel);
      }
    };
    graphTraversal(tree, 0);
    return array;
  }