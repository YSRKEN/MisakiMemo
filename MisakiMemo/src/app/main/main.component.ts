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
        idolMemo.color = list[i].color;
        this.setting.data.idolStepMemo.push(idolMemo);
      }
      this.setting.save();
    }else{
      const list = await this.database.getIdolList();
      const size = list.length;
      for(let i = 0; i < size; ++i){
        this.setting.data.idolStepMemo[i].music = list[i].music;
        this.setting.data.idolStepMemo[i].color = list[i].color;
      }
      this.setting.save();
    }
  }

  ngAfterViewInit(){
    var element = document.createElement('a');
    element.setAttribute('href',"https://twitter.com/share?ref_src=twsrc%5Etfw");
    element.setAttribute('class',"twitter-share-button");
    element.setAttribute('data-size',"large");
    element.setAttribute('data-text',"一周年記念ミッション管理ツール「美咲メモ」");
    element.setAttribute('data-url',"https://misakimemo-a6680.firebaseapp.com");
    element.setAttribute('data-show-count',"false");

    var script = document.createElement('script');
    script.async = true;
    script.setAttribute('src',"https://platform.twitter.com/widgets.js");
    script.setAttribute('charset','utf-8');

    var div = document.getElementById("anchor");
    div.parentNode.insertBefore(element,div.nextSibling);
    div.parentNode.insertBefore(script,div.nextSibling);
  }
}
