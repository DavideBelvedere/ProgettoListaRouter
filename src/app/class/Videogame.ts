import { Genere } from "./Genere";

export class VideoGame {
	private imgUrl: string;
	private title: string;
	private price: number;
	private id: string;
	private genere: Genere;
	private rating: number;
	private data: Date;
	 
	



	constructor($imgUrl: string = "", $title: string = "", $price: number = 0, $id: string = "", $genere: Genere = null, $rating: number = 0, $data=null) {
		this.imgUrl = $imgUrl;
		this.title = $title;
		this.price = $price;
		this.id = $id;
		this.genere = $genere;
		this.rating = $rating;
		this.data = $data;
	}

	 
	clone(): VideoGame {
		return new VideoGame(this.imgUrl, this.title, this.price, this.id, this.genere, this.rating, this.data);
	}

	changeValues(item: VideoGame){
		this.imgUrl = item.imgUrl;
		this.title = item.title;
		this.price = item.price;
		this.id = item.id;
		this.genere = item.genere;
		this.rating = item.rating;
		this.data = item.data;
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

	public get $data(): Date {
		return this.data;
	}

	public set $data(value: Date) {
		this.data = value;
	}

	public get $rating(): number {
		return this.rating;
	}

	public set $rating(value: number) {
		this.rating = value;
	}

	public get $genere(): Genere {
		return this.genere;
	}

	public set $genere(value: Genere) {
		this.genere = value;
	}
	
	formatDate(date:Date) {
		
		let	month = '' + (date.getMonth() + 1);
		let	day = '' + date.getDate();
		let	year = date.getFullYear();
	
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
	
		return [year, month, day].join('-');
	}

	


}