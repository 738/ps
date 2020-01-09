var arr = [];
const host = 'http://tinyurl.com/';
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const index = arr.length;
    arr.push(longUrl);
    return host + index;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return arr[+shortUrl.split(host)[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
 
