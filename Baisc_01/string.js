const name = "Aabhushan";
const age = 20;

// console.log(name + " " + age);

console.log(`${name} ${age}`); //(Better approach)

const name1 = new String("AabhushanKhanal");

console.log(name1);
console.log(name1[0]);

console.log(name1.toUpperCase());

console.log(name1.charAt(3));

const anothername1 = name1.substring(0, 4);
const anothername2 = name1.slice(0, 4);
const anothername3 = name1.substr(2, 7);
console.log(anothername1);
console.log(anothername2);
console.log(anothername3);

const url = "http://khanalaabhushan.com.np/aabu%20khanal";

console.log(url.replace("%20", "-"));

console.log(url.includes("sig"));

console.log(a);
