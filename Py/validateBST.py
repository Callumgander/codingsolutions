# Time: O(n) | Space: O(d)
def validateBST(tree):
    return validateBSThelper(tree, float("-inf"), float("inf"))


def validateBSThelper(tree, minValue, maxValue):
    if tree is None:
        return True
    if tree.value < minValue or tree.value >= maxValue:
        return False
    leftIsValid = validateBSThelper(tree.left, minValue, tree.value)
    return leftIsValid and validateBSThelper(tree.right, tree.value, maxValue)
