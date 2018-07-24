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
      const list = await this.database.getIdolList();
      const size = list.length;
      for(let i = 0; i < size; ++i){
        const idolMemo = new IdolMemo();
        idolMemo.name = list[i].name;
        idolMemo.step = "1";
        idolMemo.comment = "";
        idolMemo.id = list[i].id;
        idolMemo.music = list[i].music;
        idolMemo.ruby = list[i].ruby;
        idolMemo.type = list[i].type;
        this.setting.data.idolStepMemo.push(idolMemo);
      }
      this.setting.save();
    }else{
      const list = await this.database.getIdolList();
      const size = list.length;
      for(let i = 0; i < size; ++i){
        this.setting.data.idolStepMemo[i].music = list[i].music;
      }
      this.setting.save();
    }
  }

}
