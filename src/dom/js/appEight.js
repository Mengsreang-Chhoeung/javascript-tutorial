// using document.querySelector(name)
var content = document.querySelector(".content");

console.log("ChildNode: ", content.childNodes);
// including whitespace that is the text is the whitespace and p is element
// result ==> 0: text, 1: p, 2: text, 3: p, 4: text, 5: p, 6: text
console.log("Children: ", content.children);
// not including whitespace
// result ==> 0: p, 1: p, 2: p