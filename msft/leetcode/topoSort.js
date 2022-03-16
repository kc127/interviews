


// - create adjacency list which is my input
// - create a no-dependency queue to add nodes without any dep
// - while no-dep queue is not empty
//   - add it to result array
//   - remove it as a dep from nodes in input
//   - if any node has no dep
//     - add node to no-dep queue
// - if res array is equal to input , return res
// - return [] (because we prob have a circular dep relationship)


// */
// let subs = [0,1,2,3,4,5]
// let deps = [[1,0],[2,3],[1,5],[3,5],[4,5]];

// /*

//         0  5
//          \/| \
//          1 4  3
//               |
//               2

//   adjList = { 0: {1}
//               1: {}
//               2: {}
//               3: {2}
//               4: {}
//               5: {1,3,4}
//             }


// */

// function topoSort (adjList) {
//     let subGraph = createSubGraph(subs, deps);
//     return getTopologicalSort(subGraph);
// }

// class JobGraph {
//   constructor(jobs) {
//      this.nodes = [];
//      this.graph = {};
//      for (let job of jobs) {
//         this.addNode(job)
//      }
//   }

//   addNode(job) {
//     this.graph = new JobNode(job);
//     this.nodes.push(graph[job]);
//   }
// }

// class JobNode {
//   constructor(job) {
//     this.job = job;
//     this.prereqs = [];
//     this.visited = false;
//     this.vising = false;
//   }
// }


// console.log(topoSort(adj_list));




  


