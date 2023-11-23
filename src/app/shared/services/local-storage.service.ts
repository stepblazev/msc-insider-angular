import {Injectable} from '@angular/core';
import {isJSONObject} from "../utils/try-json";

class EmptyLocalStorage {
  static getItem() {
  }

  static setItem() {
  }

  static removeItem() {
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private get localStorage() {
    if (typeof window === "undefined") {
      return EmptyLocalStorage;
    }

    return localStorage;
  }

  public getItem<T>(key: string): T | null {
    const data = this.localStorage.getItem(key);

    if (data && isJSONObject(data)) {
      return JSON.parse(data);
    }

    return data as T;
  }

  public removeItem(key: string) {
    return this.localStorage.removeItem(key);
  }

  public setItem(key: string, value: any) {
    let _value: string;

    if (typeof value === "object") {
      _value = JSON.stringify(value);
    } else {
      _value = value;
    }

    this.localStorage.setItem(key, _value);
  }
}
