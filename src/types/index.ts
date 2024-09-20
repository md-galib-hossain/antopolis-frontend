export interface ICategory{
    _id: string;
    name : string;
    isDeleted: boolean;
    categoryImg: string;
    createdAt?: Date;
    updatedAt?: Date;

}

export interface IAnimal{
    _id?:string;
    name: string;
    animalImg: string;
    isDeleted: boolean;
    category: ICategory;
    createdAt?: Date;
    updatedAt?: Date;
}
