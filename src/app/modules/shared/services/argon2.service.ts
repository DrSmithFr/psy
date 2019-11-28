import {Injectable} from '@angular/core';

const argon2 = require('argon2-browser');

@Injectable(
    {
        providedIn: 'root'
    }
)
export class Argon2Service {

    constructor() {
    }

    generateSalt(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    async encodePassword(password: string, passSalt: string) {
        const crypted = await argon2.hash(
            {
                pass: password,
                salt: passSalt,

                mem:  4092,
                type: argon2.ArgonType.Argon2id
            }
        );

        return crypted.encoded;
    }

    async isPasswordCorrect(password: string, encrypted: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            argon2
                .verify(
                    {
                        pass:    password,
                        encoded: encrypted,

                        type: argon2.ArgonType.Argon2id
                    }
                )
                .then(
                    () => {
                        resolve(true);
                    },
                    () => {
                        resolve(false);
                    }
                );
        });
    }
}
