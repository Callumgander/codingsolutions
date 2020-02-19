// leetcode, number of islands, https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
    // graph algorithm question
    // need to traverse the entire matrix
    
    // invalid input error checking
    if(grid === null || grid.length === 0){
        return 0;
    }
    let numIslands = 0; 
    // to traverse matrix, we need a nested for loop
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            // we want to do something when we hit a 1
            if(grid[i][j] === '1'){
                numIslands += dfs(grid, i, j)
            }
            
        }
    }
    return numIslands;
};

// bfs / dfs on this grid to make sure we're not double counting any 1's
const dfs = (grid, i, j) => {
    // checking for going out of the matrix's bounds or the index we are on after our recursive calls is 0
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0'){
        return 0;
    }

    // sets the grid index to zero so we don't revisit it 
    grid[i][j] = '0';
    // visiting all the index's horizontal and vertical neighbours
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    // return 1 to account for the original island we visited
    return 1
}
    