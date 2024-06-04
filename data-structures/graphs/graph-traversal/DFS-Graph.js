class Graph {
  constructor() {
    this.adjencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjencyList[v1].push(v2);
    this.adjencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjencyList[v1] = this.adjencyList[v1].filter((v) => v !== v2);
    this.adjencyList[v2] = this.adjencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjencyList[vertex].length) {
      const adjencyVertex = this.adjencyList[vertex].pop();
      this.removeEdge(vertex, adjencyVertex);
    }
    delete this.adjencyList[vertex];
  }

  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const adjencyList = this.adjencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjencyList[vertex].forEach((n) => {
        if (!visited[n]) {
          return dfs(n);
        }
      });
    })(start);
    return result;
  }
}

let graph = new Graph();
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("New York", "London");
graph.addEdge("A", "B");
graph.addEdge("C", "D");
console.log(graph);
graph.removeVertex("Tokyo");
console.log(graph);
console.log(graph.DFSRecursive("A"));
