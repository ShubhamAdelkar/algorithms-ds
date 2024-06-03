class Graph {
  constructor() {
    this.adjencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = [];
    }
  }
}
