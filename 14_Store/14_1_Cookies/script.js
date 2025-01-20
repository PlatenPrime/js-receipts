console.log(document.cookie);

document.cookie = 'author=Platen';

console.log(document.cookie);


document.cookie = 'author=Platen; expires=Fri, 31 Dec 1970 23:59:59 GMT';

console.log(document.cookie);
console.log(document.domain);
console.log(document.path); 
console.log(document.secure); 

