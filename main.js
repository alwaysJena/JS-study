let age = null // 명시적

// undefined (암시적)

console.log(age)

setTimeout(function() {
    age = 85
}, 1000)


const user = {
    name: 'jena',
    age: 20
}

console.log(user)
console.log(user.name)
console.log(user.email) // undefined