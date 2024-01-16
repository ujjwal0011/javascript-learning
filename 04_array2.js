let domain_expansion = ["Domain", "Expansion"]
let infinite_void = ["Infinite", "Void"]

let jujutsu_kaisen = [...domain_expansion, ...infinite_void]   // (...) is a spread operator used for concatinating or spreading two or more arrays
console.log(jujutsu_kaisen);  // [ 'Domain', 'Expansion', 'Infinite', 'Void' ]


let array_3d = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11,]]]
console.log(array_3d);        // [ 1, 2, 3, [ 4, 5 ], 6, 7, [ 8, 9, [ 10, 11 ] ] ]

console.log(array_3d.flat(Infinity));  // returns a 1d array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and doesn't change the original array
console.log(array_3d);                // [ 1, 2, 3, [ 4, 5 ], 6, 7, [ 8, 9, [ 10, 11 ] ] ]


console.log(Array.isArray("Ujjwal"))  // false
console.log(Array.from("Ujjwal"))     // makes an array from the arguments [ 'U', 'j', 'j', 'w', 'a', 'l' ]
console.log(Array.from({name: "Ujjwal"}))   // gives an empty array [] because we have to tell from keys or from values we have to make an array


let Rank1 = 100
let Rank2 = 200
let Rank3 = 300

console.log(Array.of(Rank1, Rank2, Rank3));   // makes an array of the varialbles [100, 200, 300] or the arguments 
console.log(Array.of("Ujjwal"));    // ["Ujjwal"]
