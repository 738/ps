const singleNumber = (nums) => {
    const hashMap = nums.reduce((a, c) => {
        if (a[c] === undefined) a[c] = 1;
        else a[c] ++;
        return a;
    }, {});
    
    let result;
    for (const key in hashMap) {
        if (hashMap[key] === 1) {
            result = key;
            break;
        }
    }
    return result;
};

// followup
const singleNumber = (nums) => {
    return nums.reduce((a, c) => a^c);
};
