function max(arr) {
    var beg = 0, end = 1, b = [arr[0]], m = arr[0];
    arr.reduce(function(pre, cur, index) {
        if (b[index - 1] > 0) {
            b[index] = b[index - 1] + cur;
        } else {
            b[index] = cur;
            if (b[index] > m) {
                beg = index;
            }
        }
        if (b[index] > m) {
            end = index + 1;
            m = b[index];
        }
        return b[index];
    });
    return arr.slice(beg, end);
}

console.log(max([1, 15, -19, 5, 3, 5, -7, 3, 5, -1]));
console.log(max([1, 3, -9, 5, 3, -1, 5, -9, 3, 5, -1]));