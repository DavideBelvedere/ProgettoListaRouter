export class Genere {
    private id: string;
    private description: string;


    constructor($id: string, $description: string) {
        this.id = $id;
        this.description = $description;
    }

    clone(): Genere {
        return new Genere(this.id, this.description);
    }

    public get $id(): string {
        return this.id;
    }

    public set $id(value: string) {
        this.id = value;
    }

    public get $description(): string {
        return this.description;
    }

    public set $description(value: string) {
        this.description = value;
    }


}