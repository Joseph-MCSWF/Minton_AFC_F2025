function wordCounter(input) {
    if (typeof input !== "string") return 0;
    if (input.trim() === "") return 0;
    const words = input.trim().split(/\s+/);
    return words.length;
}
module.exports = wordCounter;