'DSA-Searching'

const BST = require('./BST')

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

function commandingOfficer() {
    let commanderTree = new BST(5, 'Captain Pickard')
    commanderTree.insert(3, 'Commander Riker')
    commanderTree.insert(6, 'Commander Data')
    commanderTree.insert(2, 'Lt. Cmdr. Worf')
    commanderTree.insert(4, 'Lt. Cmdr. LaForge')
    commanderTree.insert(8, 'Lt. Cmdr. Crusher')
    commanderTree.insert(1, 'Lieutenant security-officer')
    commanderTree.insert(7, 'Lieutenant Selar')
    return commanderTree
  }

console.log(commandingOfficer())

'7. Max profit'

function findMaxProfit(arr) {
    let profit = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i+1] - arr[i] > profit) {
        profit = arr[i+1] - arr[i]
      }
    }
    return profit
  }
  
  //console.log(findMaxProfit([128, 97, 121, 123, 98, 97, 105]))
