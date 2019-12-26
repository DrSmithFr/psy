import {Injectable} from '@angular/core';
import * as openpgp from 'openpgp';
import {GpgKeyModel} from '../../../../models/gpgKeyModel';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class PgpService {

    constructor() {
    }

    async generate(uuid: string, pass: string): Promise<GpgKeyModel> {
        const options = {
            userIds:    [
                {name: uuid, email: uuid + '@secure.none'}
            ],
            numBits:    4096,
            passphrase: pass
        };

        const key = await openpgp.generateKey(options);

        const privateKey = key.privateKeyArmored;
        const publicKey  = key.publicKeyArmored;

        return {
            private:  privateKey,
            public:   publicKey,
            password: pass
        };
    }

    async sign(sender: GpgKeyModel) {
        const key = (await openpgp.key.readArmored(sender.private)).keys[0];
        await key.decrypt(sender.password);

        return key;
    }

    async encrypt(message: string, sender: GpgKeyModel, receiver: GpgKeyModel): Promise<string> {
        const options = {
            message:     openpgp.message.fromText(message),
            publicKeys:  (await openpgp.key.readArmored(receiver.public)).keys,
            privateKeys: [await this.sign(sender)],
            compression: openpgp.enums.compression.zip
        };

        const encrypted = await openpgp.encrypt(options);

        return encrypted.data;
    }

    async decrypt(encrypted: string, sender: GpgKeyModel, receiver: GpgKeyModel): Promise<string | null> {
        const options = {
            message:     await openpgp.message.readArmored(encrypted),
            publicKeys:  (await openpgp.key.readArmored(sender.public)).keys,
            privateKeys: [await this.sign(receiver)],
            compression: openpgp.enums.compression.zip
        };

        const decrypted = await openpgp.decrypt(options);

        if (decrypted.signatures[0].valid) {
            return decrypted.data.toString();
        }

        return null;
    }
}
