function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
                return merge(sortedLeft, sortedRight);
    }

    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
        while (i < left.length) {
            result.push(left[i]);
            i++;
    }
        while (j < right.length) {
            result.push(right[j]);
            j++;
    }

    return result;
}
let arr = [5, 4, 8, 32, 9, 0, 3, 6, 23, 87, 7, 7];
const newArr = mergeSort(arr);
console.log(newArr);