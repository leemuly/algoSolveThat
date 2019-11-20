// Implement a priority queue with the following 3 methods:

// insert(data, priority) // inserts data into the priority queue with the given priority

// peek() // returns the value of the item with the highest priority without removing it from the priority queue

// popMax() // returns the value of the item with the highest priority and also removes it from the priority queue

// For the purposes of our implementation, "higher priority" corresponds to a higher integer value. Note, however, that this could be implemented either way.

function Node (data, priority) {
  this.data = data;
  this.priority = priority;
  this.next = null;
}

function PriorityQueue () {
  this.first = null;
}

PriorityQueue.prototype.insert = function (data, priority){
  let newNode = new Node(data, priority);

  if(!this.first) this.first = newNode;

  if(this.first.priority < newNode.priority){
    newNode.next = this.first;
    this.first = newNode;
  } else {
    let current = this.first;
    while(current){
      if(!current.next) {
        current.next = newNode
      } else if (newNode.priority > current.next.priority){
        newNode.next = current.next;
        current.next = newNode;
      } else {
        current = current.next
      }
    }
  }
}

PriorityQueue.prototype.peek = function () {
  return this.first.priority;
}

PriorityQueue.prototype.popMax = function () {
  let max = this.first;
  this.first = this.first.next;
  return max
}

const pq = new PriorityQueue();
pq.insert('Jill, concussion', 7);
pq.insert('John, stomach pain', 5);
pq.peek() // ==> 'Jill, concussion'
pq.peek() // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert('Dave, sprained ankle', 1);
pq.insert('Bob, breathing problems', 8)
pq.peek() // ==> 'Bob, breathing problems'
pq.popMax() // ==> 'Bob, breathing problems'
pq.peek() // ==> 'Jill, concussion' // Bob has been removed from the PQ
