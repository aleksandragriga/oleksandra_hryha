var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    totalPrice() {
        let totalPrice = 0;
        for (const key in this) {
            if (typeof this[key] !== "function") {
                totalPrice += parseInt(this[key]);
            }
        }
        return totalPrice + " грн";
    },
    minPrice() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] !== "function") {
                const value = parseInt(this[key]);
                if (value < min) {
                    min = value;
                }
            }
        }
        return min + " грн";
    },
    maxPrice() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] !== "function") {
                const value = parseInt(this[key] );
                if (value > max) {
                    max = value;
                }
            }
        }
        return max + " грн";
    }
};

services['покраска'] = "500 грн";

console.log("Загальна вартість послуг:", services.totalPrice()); 
console.log("Мінімальна вартість послуги:", services.minPrice()); 
console.log("Максимальна вартість послуги:", services.maxPrice()); 
