/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result = [];
    const MAX = 500;
    for (let i=1; i<=MAX; i++) {
        let bucket = [];
        for (let j=0; j<groupSizes.length; j++) {
            if (groupSizes[j] === i) {
                bucket.push(j);
            }
        }
        if (bucket.length) {
            if (bucket.length !== i) {
                let splitedBucket = [];
                for (let k=0; k<bucket.length / i; k++) {
                    splitedBucket.push(bucket.slice(k*i, (k+1)*i));
                }
                result.push(...splitedBucket);
            }
            else result.push(bucket);
        }
    }
    return result;
};
