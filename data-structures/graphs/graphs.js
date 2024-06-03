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
    this.adjencyList[v1].push(v2);
    this.adjencyList[v2].push(v1);
  }
}
