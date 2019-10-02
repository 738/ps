// 위장

function solution(clothes) {
    const clothesGroup = {}
    for (let clothe of clothes) {
        if (clothesGroup[clothe[1]] === undefined) {
            clothesGroup[clothe[1]] = [clothe[0]]
        } else {
            clothesGroup[clothe[1]].push(clothe[0])
        }
    }

    let chothesTypeCounter = 1
    for (let chothe in clothesGroup) {
        chothesTypeCounter *= clothesGroup[chothe].length + 1
    }
    return chothesTypeCounter - 1
}
