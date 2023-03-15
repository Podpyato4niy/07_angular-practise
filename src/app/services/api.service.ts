import { Injectable } from '@angular/core';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public SOURCE: {[key: string]: string} = {
    comments: `${BASE_URL}/comments`,
    posts:    `${BASE_URL}/posts`,
    users:    `${BASE_URL}/users`,
  }

  constructor() { }
}
