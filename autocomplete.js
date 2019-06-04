/* 
Implement an autocomplete system. 
That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
*/

function autocomplete(s, query) {
  return query.filter(v => v.includes(s));
}

console.log(autocomplete("de", ["dog", "deer", "deal"]));
