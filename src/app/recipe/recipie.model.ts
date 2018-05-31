export class RecipieModel {
    // here we are declaring name variable of string type
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        // here we are assigning the variable to the parameters from the constructor
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
