/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = {};
    for (let i=0; i<cpdomains.length; i++) {
        let count = +cpdomains[i].split(' ')[0];
        let domain = cpdomains[i].split(' ')[1];
        let splitedString = domain.split('.');
        for (let j=0; j<splitedString.length; j++) {
            let subdomain = splitedString.slice(j, splitedString.length).join('.');
            if (map[subdomain] === undefined) map[subdomain] = count;
            else map[subdomain] += count;
        }
    }
    return Object.keys(map).map(key => map[key] + ' ' + key);
};
