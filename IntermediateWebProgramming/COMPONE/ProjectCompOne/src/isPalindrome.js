
function isPalindrome(input) {
    if (typeof input !== 'string') return false;


    const s = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!s) return false;


    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++; j--;
    }
    return true;
}

module.exports = isPalindrome;
