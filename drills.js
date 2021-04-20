'DSA-Searching'


// Adding a React UI==============================================================================
//   See question-2-react-app for answer
// Find a book====================================================================================
//   Question too vague
// Searching in a BST=============================================================================
//   1) Given:
//     + pre-order: [35, 25, 15, 14, 19, 27, 89, 79, 91, 90]
//                    0,  1,  2,  3,  4,  5,  6,  7,  8,  9
//     + in-order: [14, 15, 19, 25, 27, 35, 79, 89, 90, 91]
//                   0,  1,  2,  3,  4,  5,  6,  7,  8,  9
//   + Expect:
//     + post-order: [14, 19, 15, 27, 25, 79, 90, 91, 89, 35]
//     + How I got to ^
// -----------------------------------------------------------
// pre-order: [35, 25, 15, 14, 19, 27, 89, 79, 91, 91] // => operation, left, right
// 35 = root
//   < 35 = left side    // => [25, 15, 14, 19, 27]
//   > 35 = right side   // => [89, 79, 91, 90]

// 25 = root of root.left
//   < 25 = left side    // => [15, 14, 19]
//   > 25 = right side   // => [27]

// 89 = root of root.right
//   < 89 = left side    // => [79]
//   > 89 = right side   // => [91, 90]

//         35
//         /\
//     25      89
//     /\      /\
//   15  27  79  91
//   /\          /
// 14  19      90
// post-order // => left, right, operation
// Left side = [14, 19, 15, 27, 25] 
// Right side = [79, 90, 91, 89]
// Root = 35
// -----------------------------------------------------------
//   2) Given:
//     + post-order: [5, 7, 6, 9, 11, 10, 8]
//                    0, 1, 2, 3,  4,  5, 6

//   + Expect:
//     + pre-order: [8, 6, 5, 7, 10, 9, 11]
//     + How I got to ^
// -----------------------------------------------------------
// post-order: [5, 7, 6, 9, 11, 10, 8]  // => left, right, operation
// 8 = root
//   < 8 = left side       // => [5, 7, 6]
//   > 8 = right side      // => [9, 11, 10]

// 6 = root of root.left
//   < 6 = left side       // => [5]
//   > 6 = right side      // => [7]

// 10 = root of root.right
//   > 10 = left side      // => [9]
//   < 10 = right side     // => [11]

//         _8
//         /\
//     _6      10
//     /\      /\
//   _5  _7  _9  11

// pre-order // => operation, left, right
// root = 8
// left = [6, 5, 7]
// right = [10, 9, 11]
// -----------------------------------------------------------
// Implement different tree traversals============================================================
//   See bst.js for code and main.js for testing
// Find the next commanding officer===============================================================

// Max profit=====================================================================================


'1. How many searches?'

//   + Given [ 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 ]
//             0  1  2  3   4   5   6   7   8   9
//     + Identify numbers checked in search of 8
//         -start[0], end[arr.length = 10]
//       + check 1 = arr[5] => 12
//         - 8 < 12
//         - start[0], end[4]
//       + check 2 = arr[2] => 6
//         - 8 > 6
//         - start[3], end[4]
//       + check 3 = arr[3] => 8
//         - 8 === 8
//         - return 3
//     + Identify numbers checked in search of 16
//       + check 1 = arr[5] => 12
//         - 16 > 12
//         - start[6], end[10]
//       + check 2 = arr[8] => 17
//         - 16 < 17
//         - start[6], end[7]
//       + check 3 = arr[6] => 14
//         - 16 > 14
//         - start[7], end[7]
//       + check 4 = arr[7] => 15
//         - 16 > 15
//         - start[8], end[4]
//       + check 5 = start > end
//         - return -1

'2. Adding a React UI'

    '1) Linear search:'

let dataSet = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,]

    '2) Binary search:'


'3. Find a book'

'4. Searching in a BST'

'5. Implement different tree traversals'

'6. Find the next commanding officer'
