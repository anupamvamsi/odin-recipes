import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from '../recipe/recipe-interface';

@Injectable({
  providedIn: 'root',
})
export class PseudoBackendService {
  private apiUrl: string = 'http://localhost:5000/recipes';

  constructor(private httpClient: HttpClient) {}

  getRecipe(id: number): Observable<IRecipe> {
    console.log(this.httpClient.get<IRecipe>(`${this.apiUrl}/${id}`));
    return this.httpClient.get<IRecipe>(`${this.apiUrl}/${id}`);
  }
}
