# Frequency Counter Algorithm



```js
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let profile1 = {};
    let profile2 = {};

    // loop over and profile str1
    for (let char of str1) {
        profile1[char] = (profile1[char] || 0) + 1;
    }
    // loop over and profile str2
    for (let char of str2) {
        profile2[char] = (profile2[char] || 0) + 1;
    }

    for (let key in profile1) {
        // check if second profile has at least the occurance of every letter
        if (!(profile2[key])) {
            return false;
        }
        // check if the frequencies of the occurances match
        if (profile2[key] !== profile1[key]) {
            return false;
        }
    }
    return true;
}


```