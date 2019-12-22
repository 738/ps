/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set();
    for (let i=0; i<emails.length; i++) {
        let [localName, domainName] = emails[i].split('@');
        localName = localName.replace(/\./g, '');
        if (localName.includes('+')) localName = localName.substring(0, localName.indexOf('+'));
        let email = [localName, domainName].join('@');
        set.add(email);
    }
    console.log(set);
    return set.size;
};
