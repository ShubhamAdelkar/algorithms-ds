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

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjencyList[currentVertex].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log(graph);
graph.removeVertex("Tokyo");
console.log(graph.BFS("A"));
console.log(graph);
