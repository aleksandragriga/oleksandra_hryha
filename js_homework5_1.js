var flower = {
    name: 'Роза',
    color: 'Червоний',
    size: '50 см',
    getInfo: function addnewkey() {
        for (let key in this) {
            if (key !== "getInfo") { 
                console.log(key, " ", this[key]);
            }
        }
    }
};

flower.getInfo(); 

flower.smell = 'Без аромату';

flower.getInfo(); 