export class Menu {
    id!: number;
    title!: string;
    image!: string;
    description!: string;
    approved: boolean=false;
    reservations: number[]=[];
}