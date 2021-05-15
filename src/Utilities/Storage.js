/* @flow */

import {AsyncStorage} from 'react-native';


export default class Storage {
  _prefix: string;
  constructor(prefix: string = '') {
    this._prefix = prefix;
  }

  _key(key: string) {
    return `${this._prefix}${key}`;
  }

  async get(key: string) {
    try {
      return await AsyncStorage.getItem(this._key(key));
    }
    catch (err) {
      return null;
    }
  }

  async set(key: string, value: any): Promise<void> {
    return AsyncStorage.setItem(this._key(key), value.toString());
  }

  async setFromObject(obj: any): Promise<any> {
    return Promise.all(Object.entries(obj).map(([key, value]) => this.set(key, value)));
  }

  substorage(prefix: string): Storage {
    return new Storage(`${this._prefix}${prefix}`);
  }

  static create(): Storage {
    return new Storage();
  }
}
