START
  ↓
Does the problem ask for:
  ┌────────────────────────────────────────────┐
  │ 1. Return true/false if a condition is met │
  └────────────────────────────────────────────┘
        ↓
     Yes → Are inputs sorted or can be sorted?
               ↓               ↓
            Yes              No
             ↓                ↓
     ➤ Use Two Pointers   ➤ Use Hash Map / Set
       or Sliding Window    (e.g. Frequency Counter)
  ───────────────────────────────────────────────────────────
  ↓
Does it ask for:
  ┌────────────────────────────────────────────┐
  │ 2. Count or track frequency of values      │
  └────────────────────────────────────────────┘
        ↓
     ➤ Use Frequency Counter (Hash Map)
  ───────────────────────────────────────────────────────────
  ↓
Does it ask to:
  ┌────────────────────────────────────────────┐
  │ 3. Find a subarray or substring that       │
  │    meets some condition (e.g., sum, length)│
  └────────────────────────────────────────────┘
        ↓
     ➤ Use Sliding Window or Prefix Sum
  ───────────────────────────────────────────────────────────
  ↓
Does it ask to:
  ┌────────────────────────────────────────────┐
  │ 4. Find pair, triplet, or set of values    │
  │    that meet a condition (e.g., sum = k)   │
  └────────────────────────────────────────────┘
        ↓
     Is array sorted or can be sorted?
           ↓                  ↓
        Yes                 No
         ↓                   ↓
 ➤ Use Two Pointers     ➤ Use Hash Set or Map
                         (or brute-force if small input)
  ───────────────────────────────────────────────────────────
  ↓
Does it ask to:
  ┌────────────────────────────────────────────┐
  │ 5. Traverse or search a tree/graph         │
  └────────────────────────────────────────────┘
        ↓
    ➤ Use DFS, BFS, or Dijkstra’s (depending on weighted/unweighted)
  ───────────────────────────────────────────────────────────
  ↓
Does it ask to:
  ┌────────────────────────────────────────────┐
  │ 6. Optimize a solution (e.g., find min/max)│
  │    with overlapping subproblems            │
  └────────────────────────────────────────────┘
        ↓
    ➤ Use Dynamic Programming (Top-down or Bottom-up)
  ───────────────────────────────────────────────────────────
  ↓
Does it involve:
  ┌────────────────────────────────────────────┐
  │ 7. Recursion or tree-like problems         │
  └────────────────────────────────────────────┘
        ↓
    ➤ Use Recursion or Divide & Conquer
  ───────────────────────────────────────────────────────────
  ↓
Does it involve:
  ┌────────────────────────────────────────────┐
  │ 8. Matching patterns (regex, brackets, etc)│
  └────────────────────────────────────────────┘
        ↓
    ➤ Use Stack
  ───────────────────────────────────────────────────────────
  ↓
Does it involve:
  ┌────────────────────────────────────────────┐
  │ 9. Reordering, merging, or sorting         │
  └────────────────────────────────────────────┘
        ↓
    ➤ Use Merge Sort, Quick Sort, or Heaps
  ───────────────────────────────────────────────────────────
  ↓
Is it:
  ┌────────────────────────────────────────────┐
  │ 10. A search problem over a sorted domain  │
  └────────────────────────────────────────────┘
        ↓
    ➤ Use Binary Search or Ternary Search
  ───────────────────────────────────────────────────────────
  ↓
None of the above?
    ➤ Try Brute Force, analyze time/space, and optimize iteratively

