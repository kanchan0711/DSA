let ar = [1, 3, -4, -2, -8, -9, 10, -11, 5]

function countNegative(arr) {
    let count = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) count++
    }
    console.log(count)
}
countNegative(ar)

function findLargest(arr) {
    let num = arr[0]
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > num) num = arr[i]
    }
    console.log(num)
}
findLargest(ar)

function secLargest(arr) {
    let first = -Infinity;
    let sec = -Infinity

    if (arr.length < 2) return "Invalid Input"
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > first) {
            sec = first
            first = arr[i]
        }
        else if (arr[i] > sec && arr[i] !== first) {
            sec = arr[i]
        }
    }

    console.log(sec)
}

secLargest(ar)