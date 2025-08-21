# Graph Traversal

Visiting/Updating/Checking each vertex in a graph.

Real-world use cases mostly deals with find neighbors, shortest path, etc.

For every node in a graph there is no guarentee that there is ony a single path to reach it.

### Uses:
- Peer to peer network
- Web crawlers
- Finding "closest" matches/recommendations
- Shortest Path:
  - GPS
  - Solving Mazes
  - AI (shortest path to win the game)

### Different than a tree, by a graph a single node may need to be visited more than once in oreder to reach the rest of the nodes.

---
# DFS
- (Deepening the traversal before widening, visiting children before siblings, moving away from the 'root', continue searching neighbors)

### Pseudocode: (Recursive)
```js 
`
DFS(vertex):
    if vertex is empty
        return (base case)
    add vertex to results list
    mark vertex visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
```

```js
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2); 
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graph(); // SEE BELOW FOR GRAPH DIAGRAM

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
```
```JSON
ADJACENCY LIST REPRESENTATION
{
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "E"],
    "D": ["B", "E", "F"],
    "E": ["C", "D", "F"],
    "F": ["D", "E"]
}
```
```
VISUAL DIAGRAM
                   A
                 /   \
                B     C
                |     |
                D ——— E
                 \   /
                   F
```
## Recursive steps:
1. The function should accept a starting node.
2. Create a list to store the end result, to be returned at the very end.
3. Create an object to store visited vertices.
4. Create a helper functin which acceps a vertex...
   1. The helper func should return early if the vertex is empty
   2. The helper func should place the vertex it accepts into the visited object and push that vertex into the result array.
   3. Loop over all the values in the adjacency list for the vertex
      1. If any of those values have not been visited, recursively invoke the helper func with that vertex.
5. Invoke the helper func with the starting vertex.

```js
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    dfsRecursive(start) {
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList; // needed for context reasons inside the helper, 'this' keyword changes meaning inside the helper

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);  // <- Cool! Just initializing and invoking immediately

        return result;
    }
}
```
## Iterative Psuedocode/Steps:
```js
`
DFS-iterative(start):
    let S be a stack
    S.push(start)
    while S is not empty
        vertex = S.pop()
        if vertex is not labeled as discovered:
            visit (add to result list)
            label vertex as discovered
            for each of vertex's neighbors, N do
                S.push(N)
```

1. The function should take a starting node.
2. Create a stack as an empty array, to track vertices.
3. Create a list to store the end result, to be returned at the very end.
4. Create an object to store visited vertices.
5. Add the starting vertex to the stack, and mark it visited.
6. While the stack has something in it:
   1. Pop the next vertex from the stack
   2. If that vertex hasn't been visited yet:
      1. Mark it visited
      2. Add it to the result list
      3. **Push all neighbors into the stack**

```js
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    dfsIterative(start) {
        let stack = [start]; // initialized with start
        let result = [];
        let visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }
}
```