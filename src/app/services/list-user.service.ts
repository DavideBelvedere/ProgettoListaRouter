
import { Injectable } from "@angular/core";
import { User } from "../class/User";

@Injectable()
export class ListUserService {
    private users: User[] = [new User('utente1', 'pass1', 'admin'),
    new User('utente2', 'pass2', 'schiavo'),

    ];

    constructor() {

    }
    getUsersList(): User[] {
        return this.users;
    }

    getUserByUser(userId: string): User {
        for (let user of this.users) {
            if (user.$user == userId) {
                return user.clone();
            }
        }
    }

    login(userId: string, pass: string): boolean {
        for (let user of this.users) {
            if (user.$user == userId) {
                sessionStorage.setItem('user', JSON.stringify(user));

                return true;
            }
        }
        return false;

    }

    isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }


}