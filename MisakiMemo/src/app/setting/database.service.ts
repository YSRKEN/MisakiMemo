import { Injectable } from '@angular/core';
import { IdolData } from './IdolData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  IdolList: IdolData[] = [];

  constructor(private http: HttpClient) {
    this.http.get("assets/idol_list.csv", { responseType: 'text' }).subscribe(csv => {
      const temp = csv.split("\n");
      for(let getLine of temp){
        const temp2 = getLine.split("\t");
        if(temp2[0] == "name"){
          continue;
        }
        const idol = new IdolData();
        idol.name = temp2[0];
        idol.type = temp2[1];
        idol.music = temp2[2];
        this.IdolList.push(idol);
      }
    });
  }
}
