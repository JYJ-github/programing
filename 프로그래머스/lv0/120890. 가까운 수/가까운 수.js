function solution(array, n) {
    array.push(n);
    let n_index = array.sort(function (a, b) { return a - b }).indexOf(n);
    if (n_index === 0) {
        return array[1];
    } else if(n_index === (array.length - 1)) {
        return array[array.length - 2];
    }else if ((array[n_index] - array[n_index - 1]) <= (array[n_index + 1] - array[n_index])) {
        return array[n_index - 1];
    } else {
        return array[n_index + 1];
    }
}