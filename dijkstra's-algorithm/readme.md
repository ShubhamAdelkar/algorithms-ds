# Dijkstra's Algorithm

one of the most famous & widely used algorithm out there.
finds the shortest path between two vertices on a graph.

## why is it helpful

1. `GPS - finding fastest route`
2. `Airline ticket - finding cheapest route to your destination`
3. `Network routing - finding open shortest path of data`

## Code Analysis

1. **PriorityQueue Class:**
   Manages a priority queue using an array.
   Enqueues elements with val and priority properties.
   Sorts the queue based on priority in ascending order (lower priority at the front).

2. **WeightedGraph Class:**
   Represents a weighted graph using an adjacency list.
   addVertex creates a new vertex in the graph.
   addEdge creates a bidirectional edge between two vertices with a weight.

3. **Dijkstra Function:**
   A. Takes a start and finish vertex as input.
   B. Initializes data structures:

   - `nodes:` Priority queue to hold unvisited vertices and their distances from start.
   - `distances:` Object to store distances from start to each vertex (initially Infinity).
   - `previous:` Object to track the previous node in the shortest path for each vertex.
   - `path:` Array to store the path from start to finish (built at the end).

   C. Iterates while there are unvisited nodes:

   - Dequeue the vertex with the smallest distance from nodes.
   - If the dequeued vertex is finish, build the path and return it.
   - `For each neighbor of the dequeued vertex:`
     - Calculate the tentative distance to the neighbor.
     - If the tentative distance is less than the current distance to the neighbor:
       - Update the distance and previous node for the neighbor.
       - Enqueue the neighbor in the priority queue with the new distance.
     - Builds the final path by backtracking from finish through previous and returns it.
