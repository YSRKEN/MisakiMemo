import { Component, OnInit } from '@angular/core';
import { SettingService } from '../service/setting.service';
import { DatabaseService } from '../service/database.service';
import { IdolMemo } from '../service/IdolMemo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private database: DatabaseService, private setting: SettingService) { }

  async ngOnInit() {
    if(this.setting.data.idolStepMemo.length == 0){
      for(let temp of await this.database.getIdolList()){
        const idolMemo = new IdolMemo();
        idolMemo.name = temp.name;
        idolMemo.step = "1";
        idolMemo.comment = "";
        this.setting.data.idolStepMemo.push(idolMemo);
      }
      this.setting.save();
    }
  }

}
