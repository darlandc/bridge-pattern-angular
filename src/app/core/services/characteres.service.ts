import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacteresService {

  private url = `https://rickandmortyapi.com/api/character/244`;

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(this.url, {});
  }

}
