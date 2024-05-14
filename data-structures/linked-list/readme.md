# Linked list

a linked list in JavaScript is a linear data structure where elements, called nodes, are connected by links instead of being stored in contiguous memory locations like arrays

## Breakdown of linked list

1. **Data:** The actual value or element you want to store.
2. **Pointer:** A reference (link) to the next node in the sequence.
   This pointer structure allows you to traverse the list sequentially, but not randomly access elements by index like you would with an array.

## Here's a breakdown of key concepts:

1. **Nodes:** The building blocks of a linked list. Each node is a separate object with data and a pointer to the next node.
2. **Head:** The first node in the list. It acts as the entry point for accessing the linked list.
3. **Tail:** The last node in the list. Its pointer typically points to null, signifying the end of the list.
   Types of Linked Lists in JavaScript:

**There are various types of linked lists, but the most common ones implemented in JavaScript are:**

1. **Singly Linked List:** The basic type, where each node has a pointer to the next node only.
2. **Doubly Linked List:** Each node has two pointers, one to the next node and one to the previous node, enabling traversal in both directions.

## Implementation:

You can implement a linked list in JavaScript using classes:

1. **Node Class:** Defines the structure of a node with data and a next pointer property.
   LinkedList Class: Manages the linked list, including methods for adding, removing, and iterating through nodes.

**Advantages of Linked Lists:**

1. **Dynamic Size:** Linked lists can grow or shrink as needed, unlike arrays with a fixed size.
   Efficient Insertion/Deletion: Insertion and deletion of elements at any position are generally faster than arrays as no shifting of elements is required.

**Disadvantages of Linked Lists:**

1. **No Random Access:** Elements cannot be directly accessed using an index, iterating through the list is necessary.
2. **Memory Overhead:** Each node stores an extra pointer reference, leading to slightly higher memory usage compared to arrays.

**When to Use Linked Lists:**

1. Linked lists are a good choice when:

You need frequent insertions or deletions at any point in the list.
The data size is unknown beforehand, and the list needs to grow dynamically.
