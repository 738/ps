function solution(words, queries) {
    return queries.map(v=>getMatchedCount(v, words))
}
function getMatchedCount(query, words) {
    return words.reduce((t,v)=>{
        if (check(query, v)) return t+1
        else return t
    }, 0)
}          
function check(query, word) {
    if (query.length !== word.length) return false
    if (query[0] === '?') {
        query=query.split('').reverse().join('')
        word=word.split('').reverse().join('')
    }
    let idx=query.indexOf('?')
    return query.substring(0, idx) === word.substring(0, idx)
}
