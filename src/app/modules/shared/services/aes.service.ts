import {Injectable} from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AesService {

  constructor() {
  }

  encrypt(message: string, key: string) {
    const encoded = CryptoJS.AES.encrypt(message, key);
    return encoded.toString();
  }

  decrypt(encrypted: string, key: string) {
    const code = CryptoJS.AES.decrypt(encrypted, key);
    return code.toString(CryptoJS.enc.Utf8);
  }
}
