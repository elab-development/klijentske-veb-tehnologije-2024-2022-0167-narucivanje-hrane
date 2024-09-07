export class Product {
    imagePath: string;
    name: string;
    description: string;
    price: string;

    constructor(imagePath: string, name: string, description: string, price: string){
        this.imagePath = imagePath;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}