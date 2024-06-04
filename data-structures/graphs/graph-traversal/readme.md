# Graph traversal

DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It keeps track of visited nodes to avoid infinite loops in graphs with cycles.

### Uses

1. Peer to peer networking
2. Web crawlers
3. Finding "closest" matches/ recommendations
4. Shortest path problems
   - GPS Navigation
   - Solving mazes
   - AI

### Code Analysis

1. `DFSRecursive(start):` This is the core DFS function.
2. `result:` An array to store the visited vertices in the traversal order.
3. `visited:` A hash table to keep track of visited nodes.
4. `adjencyList:` Reference to the graph's adjacency list for clarity.
5. `Inner recursive function (dfs):`
   - Base case: If vertex is null (no more vertices to explore), return null.
   - Mark vertex as visited.
   - Push vertex to the result array.
   - For each neighbor (n) of vertex:
   - If n is not visited, recursively call dfs(n) to explore that branch.
6. Returns the `result` array containing the visited vertices.
