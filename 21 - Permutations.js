/* 
  Create all permutations of a non-empty input string and remove duplicates.
  Create as many "shufflings" as you can!
*/

function permutations(string) {

    const permute = (str, prefix = '') => {
        if (str.length === 0) {
            results.add(prefix); 
        } else {
            for (let i = 0; i < str.length; i++) {
                permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
            }
        }
    };

    const results = new Set(); 
    permute(string);
    return [...results];    
}

console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
