function oddOnesOut(nums) {
    return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
}