# Graph

Graphs are a fundamental data structure used to represent relationships between entities. They are particularly helpful for modeling networks, social connections, transportation systems, and various other scenarios where connections and paths are important.

it consist of a finite set of vertices or nodes or points, together with a set of unordered pairs if these vertices for an undirected graph or a set of ordered pairs for a directed graphs.

## Uses

`Social Network`
`Locstion/Mapping`
`Routing Algorithms`
`Visual Hierachy`
`File System Optimizations`
`EveryWhere`

## Terminology

1. **Nodes (Vertices)**: These represent the individual entities in the graph. They can be labeled with data (e.g., strings, numbers, objects) to hold relevant information.
2. **Edges**: These represent the connections between nodes. Edges can be directed (one-way connection) or undirected (two-way connection). They might also have weights associated with them to indicate distances, costs, or other factors.

## Represention

1. **Adjacency Matrix**
   This uses a two-dimensional array to represent the connections between nodes.
   The rows and columns represent nodes, and the value at a specific row i and column j indicates the presence of an edge (weight) between node i and node j.
   For directed graphs, the values can be 0 for no connection and a specific value for a connection. For undirected graphs, the matrix is symmetrical

```javascript
matrix[i][j] = matrix[j][i];
```

2. **Adjacency List**
   This uses an object (or an array of objects) to represent the connections for each node.
   Each node is a key in the object, and the value associated with the key is an array of its neighboring nodes (and optionally, edge weights).
