export class VideoGame {
    private imgUrl: string;
    private title: string;
    private price: number;
    private id: string;
    private genere: string;
    private rating: number;
    private anno: number;



	constructor($imgUrl: string, $title: string, $price: number, $id: string, $genere: string="", $rating: number=0, $anno: number=0) {
		this.imgUrl = $imgUrl;
		this.title = $title;
		this.price = $price;
		this.id = $id;
		this.genere = $genere;
		this.rating = $rating;
		this.anno = $anno;
	}

	public get $id(): string {
		return this.id;
	}

	public set $id(value: string) {
		this.id = value;
	}

	public get $title(): string {
		return this.title;
	}

	public set $title(value: string) {
		this.title = value;
	}
  

	public get $price(): number {
		return this.price;
	}

	public set $price(value: number) {
		this.price = value;
	}

	public get $anno(): number {
		return this.anno;
	}

	public set $anno(value: number) {
		this.anno = value;
	}

	public get $rating(): number {
		return this.rating;
	}

	public set $rating(value: number) {
		this.rating = value;
	}

	public get $genere(): string {
		return this.genere;
	}

	public set $genere(value: string) {
		this.genere = value;
	}



}