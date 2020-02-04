## https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

def catAndMouse(x, y, z):
    AtoZ = abs(x - z)
    BtoZ = abs(y - z)
    if AtoZ < BtoZ:
        return "Cat A"
    elif AtoZ > BtoZ:
        return "Cat B"
    else:
        return "Mouse C"