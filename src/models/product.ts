export class Product {
    id: number;
    imagePath: string;
    name: string;
    description: string;
    price: number
    amount: number;

    constructor(id: number, imagePath: string, name: string, description: string, price: number, amount: number){
        this.id = id;
        this.imagePath = imagePath;
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
    }

    calculateTotalPrice(): number {
        return this.price * this.amount;
    }
    
}