# Not from leetcode or any other sites, practice problem in an algorithms and DS course

# recursive method
# On average O(log(n)) time complexity and O(log(n)) space complexity
# Worst for both is O(n)


def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))


def findClosestValueInBstHelper(tree, target, closest):
    # if we're at a leaf
    if tree is None:
        return closest
    # if the current closest is greater than the absolute value of the target value minus the tree.value then replace the current closest
    # value with tree.value
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    # if the tree.value is greater than the target, then call the helper function on the left side of the tree,
    # essentially removing the need to search the right side due to the nature of the BST
    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    # otherwise, search the right side of the tree
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest


# iterative approach
# On average O(log(n)) time complexity and O(1) space complexity
# Worst for time complexity O(n) and O(1) for space

def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float("inf"))


def findClosestValueInBstHelper(tree, target, closest):
    currentNode = tree
    while currentNode is not None:
        if abs(target - closest) > abs(target - currentNode.value):
            closest = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:
            break
    return closest
