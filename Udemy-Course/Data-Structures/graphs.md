# Graphs

Used in all social networks
mapping preferences of uses
Google maps
expresses relationships, freeform, no pattern
etc

consists of finite and possible mutable set of vetices or nodes or points. Together with a set of unordered pairs of these vertices for an undirected graph or set of unordered pairs for a directed graph.

Nodes + Connections between these Nodes.

```
    A                                         
  /   \                                      
B _____ G                                                 
| _____/|  
|/      |                                              
C       F                                           
  \   /                                            
    D                                                
```

### Types of Graphs:
- Vertex = a node
- Edge = connection btw nodes
- Weighted/Unweighted = a value associated with paths connections between edges
- Directed/Undirected = Undirected, No polarity to the edges, meaning there are all 2 way connections. Directed is a direction assigned to a an edge.

### Representing a Graph
Representing the connections and edges using:
- **Adjacency Matrix** 
  |  :-:  | A | B | C | D | E | F |
  |-------|---|---|---|---|---|---|
  | **A** | 0 | 1 | 0 | 0 | 0 | 1 |
  | **B** | 1 | 0 | 1 | 0 | 0 | 0 |
  | **C** | 0 | 1 | 0 | 1 | 0 | 0 |
  | **D** | 0 | 0 | 1 | 0 | 1 | 0 |
  | **E** | 0 | 0 | 0 | 1 | 0 | 1 |
  | **F** | 1 | 0 | 0 | 0 | 1 | 0 |                        
    
- **Adjacency List**
```
     [                      
  0    [1,5],              
  1    [0,2],              
  2    [1,3],              
  3    [2,4],              
  4    [3,5],              
  5    [4,0]               
     ]                    

 {
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"],
 }
```

## Big O:
- V - number of Vertices
- E - number of Edges

| Operation          | Adjacency List | Adjacency Matrix |
|--------------------|----------------|------------------|
| ***Add Vertex***   | O(1)           | O(V^2)           |
| ***Add Edge***     | O(1)           | O(1)             |
| ***Remove Vertex***| O(V + E)       | O(V^2)           |
| ***Remove Edge***  | O(E)           | O(1)             |
| ***Query***        | O(V + E)       | O(1)             |
| ***Storage***      | O(V + E)       | O(V^2)           |

### Adjacency List
  - **Sparse Graph, less space taken**
  - **Faster iterate over all edges**
  - *Slower lookup specific edge*
### Adjacency Matrix
  - *Sparse graphs more space taken*
  - *Slower to iterate over edges*
  - **Faster to lookup specific edge**

# Adjacency List Wins! 
Most real-world data tends to lend itself sparser and/or larger graphs.
So we only store the connections, and not the vertices, to save space.

# Graph Class
undirected graph (bi-directional edges)
### Add Vertex (Node)
1. Write a method called addVertex, which accepts a name of a vertex.
2. It should add a key to the adj list with the name of the vertex and set its value to be an empty array.

### Add Edge (Connection)
1. This function should accepts 2 vertices, we can call them vertex1 and vertex2.
2. This function should find in the adjacency list the key of v1 and push v2 to the array.
3. The function should find the key of v2 and push v1 to the array
4. Don't worry about handling errors/invalid vertices for example
   
### Remove Edge (Connection)
1. This function accepts 2 vertices, we'll call v1, v2.
2. The function should reassign the key of v1 to be an array that does not contain v2.
3. The function should reassign the key of v2 to be an array that does not contain v1.
4. Don't worry about error handling errors/invalid vertices for example

### Remove Vertex (Node)
1. Function should accept a vertex to remove.
2. This function should loop as long as there are any other vertices in the adj list for that vertex.
3. Inside the loop, call the `removeEdge()` function with the vertex we are removing and any values in the adj list for that vertex.
4. delete the key from the list to remove its last trace
5. Todo error handling.

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
```
