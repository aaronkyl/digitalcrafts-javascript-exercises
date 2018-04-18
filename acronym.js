function acronym(array) {
    return array.reduce(function (a,b, index) {
        if (index == 1)
            return a[0].toUpperCase() + b[0].toUpperCase();
        else
            return a + b[0].toUpperCase();
    });
}

console.log(acronym(['national', 'aeronautics', 'space', 'administration']));
console.log(acronym(['very', 'important', 'person', 'dontchaknow']));