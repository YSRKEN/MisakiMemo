import { Injectable, OnInit } from '@angular/core';
import { IdolData } from './IdolData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  IdolList: IdolData[] = [];

  constructor(private http: HttpClient) {
  }

  async getIdolList(): Promise<IdolData[]>{
      if(this.IdolList.length > 0){
        return this.IdolList;
      }else{
        const csv = await this.http.get("assets/idol_list.tsv", { responseType: 'text' }).toPromise();
        const temp = csv.split("\n");
        let id = 1;
        this.IdolList = [];
        for(let getLine of temp){
          const temp2 = getLine.split("\t");
          if(temp2[0] == "name"){
            continue;
          }
          const idol = new IdolData();
          idol.id = id;
          idol.name = temp2[0];
          idol.ruby = temp2[1];
          idol.type = temp2[2];
          idol.music = temp2[3];
          this.IdolList.push(idol);
          ++id;
        }
        return this.IdolList;
      }
  }
}
