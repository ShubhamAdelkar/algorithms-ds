# HashMap

Hash Tables are used to store key-value pairs. they are like arrays, but keys are not ordered.
hash tables are so fast for all of the operations - finding values, adding values, and removing values.
they are commonly used data structures in every programming language.

## the hash part

to implement it use array. then converting keys into valid array indices. and a function thats performs this task is called hash function.

## what makes a good hash ?

1. Fast (constant time).
2. Dosen't cluster outputs at specific indices, but distribute unuiformly.
3. Deterministic (same inputs yields same output).
