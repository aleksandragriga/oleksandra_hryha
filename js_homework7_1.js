var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];


var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(?:gmail\.com|yahoo\.com)$/;

var correctEmails = arr.filter(function(user) {
    return emailRegex.test(user.email);
});

console.log(correctEmails);