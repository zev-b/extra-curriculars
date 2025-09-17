# Dijkstra's Shortest Path Algorithm

1. Prerequisite data structures:
    - Graph
    - Binary Heap
    - Priority Queue

2. Works on a Weighted Graph

3. What is it?
    - find the shortest path between 1 point and another

4. Edsger Dijkstra
    - Dutch programmer, physicist, essayist.
    - Helped advance the field of computer science from an "art" to an acedemic discipline.
    - Many of his discoveries and algorithms are used today.
    - Apparently, he wanted to demonstrate o the public how a computer can solve a problem easily, one that can take humans a long time to solve.
    - Thought of in 20 min over morning coffee in Amsterdam.

5. Uses:
   1. GPS
   2. Network Routing - open shortest path for data
   3. Biology - used to model the spread of viruses among humans
   4. Airline Tickets - finding cheapest route to destination
   5. Etc...
6. Our graphs until now have not had a distance or weight to each edge, so we need to implement a weighted graph

## Implementing a Weighted Graph
```js
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);
```
## The Algo
```
    *A*
  2/   \_4____*B*
  /            |
*C*———2———*D*  | 3
 \     1|   \3 | 
  \_4___|_3__*E*
       *F*
```
Find the shortest path from A to E
A => E

### The Approach
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of its neighbors.
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking *from the starting node.*
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

### Visualized Considerations:
| Vertex | Shortest Dist from A |
|-----|----------------|
|  A  |      0         |
|  B  |     Infinity   |
|  C  |     Infinity   |
|  D  |     Infinity   |
|  E  |     Infinity   |
|  F  |     Infinity   |

**Visited:**
`[]`

**Previous:**
```js
{
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
    F: null
}
```

## Pseudocode:
1. This function should accept a starting and ending vertex
2. Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with the value of infinity, except for the starting vertex which should have a value of `0`.
3. After setting a vaue in the distances object, add each vertex with a priority of inifinity o the priority queue, exept the starting vertex, which should have a priority of `0` because thats where we begin the route.
4. Create another object called previous and set each key to be every vertex in the adjacency list with a value of `null`
5. Start looping as long as there is anything in the priority queue
   1. dequeue a vertex from the priority queue
   2. if that vertex is the same as the ending vertex - we are done!
   3. Otherwise loop hrough each value in the adjacency list at that vertex
      1. Calculate the distance to that vertex from the starting vertex
      2. if that distance is less than what is currently stored in our distances object
         1. update the distances object with new lower distance
         2. update the prevous object to contain that vertex
         3. enqueue the vertex with the total distance from the start node

### (Naive Priority Queue Approach)
```js
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]
```