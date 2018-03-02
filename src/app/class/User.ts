export class User {
	private user: string;
    private pass: string;
    public tipo:string;




	constructor($user: string, $pass: string,$tipo:string) {
		this.pass = $pass;
        this.user = $user;
        this.tipo=$tipo
		
    }
    
	clone(): User {
		return new User(this.user, this.pass, this.tipo);
	}

	public get $user(): string {
		return this.user;
	}

	public set $user(value: string) {
		this.user = value;
	}

	public get $pass(): string {
		return this.pass;
	}

	public set $pass(value: string) {
		this.pass = value;
	}


	public get $tipo(): string {
		return this.tipo;
	}

	public set $tipo(value: string) {
		this.tipo = value;
	}



}