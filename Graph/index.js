 class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vtx) {
        if(!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = [];
            return true;
        }
        return false;
    }

    addEdge(vtx1, vtx2) {
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
            return true;
        }
        return false;
    }

    removeEdge(vtx1, vtx2) {
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v => v !== vtx2)
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v !== vtx1)
            return true;
        }
        return false;
    }

    removeVertex(vtx) {
        if(!this.adjacencyList[vtx]) return undefined;

        for(let neighbor of this.adjacencyList[vtx]) {
            this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(v => v !== vtx)
        }

        delete this.adjacencyList[vtx];
        return this;
    }
 }

 const myGraph = new Graph()
 myGraph.addVertex("A")
 myGraph.addVertex("B")
 myGraph.addVertex("C")
 myGraph.addVertex("D")
 myGraph.addEdge("A", "B");
 myGraph.addEdge("A", "C");
 myGraph.addEdge("A", "D");
 myGraph.addEdge("B", "D");
 myGraph.addEdge("C", "D");
//  myGraph.removeEdge("A", "B");
 myGraph.removeVertex("D")
 console.log(myGraph);
 