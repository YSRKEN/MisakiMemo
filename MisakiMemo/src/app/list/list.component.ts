import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../setting/database.service';
import { SettingService } from '../setting/setting.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /**
   * アイドル名→指定曲の対応表
   */
  private idolNameToMusic: {[key: string]: string} = {};

  /**
   * コンストラクタ
   * @param database データベースサービス
   * @param setting 設定サービス
   */
  constructor(private database: DatabaseService, private setting: SettingService) {
  }

  async ngOnInit() {
    for(let idol of await this.database.getIdolList()){
      console.log(idol);
      this.idolNameToMusic[idol.name] = idol.music;
    }
    console.log(this.idolNameToMusic);
  }

  /**
   * アイドル一覧を返却する
   */
  get idolNameList(): string[]{
    let list = this.database.IdolList;

    // キャラ名フィルタ
    const idolName = this.setting.data.idolName.value;
    if(idolName != ""){
      list = list.filter(idol => idol.name.includes(idolName) || idol.ruby.includes(idolName));
    }

    // 属性フィルタ
    const idolType = this.setting.data.idolType.value;
    if(idolType != "指定なし"){
      list = list.filter(idol => idol.type == idolType);
    }

    // ソート処理
    const descFlg = (this.setting.data.sortMode.value == "降順");
    switch(this.setting.data.sortType.value){
      case "アイドルID":
        if(descFlg){
          list = list.sort((b, a) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
        }else{
          list = list.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
        }
      break;
      case "アイドル名":
      if(descFlg){
        list = list.sort((b, a) => a.ruby > b.ruby ? 1 : a.ruby < b.ruby ? -1 : 0);
      }else{
        list = list.sort((a, b) => a.ruby > b.ruby ? 1 : a.ruby < b.ruby ? -1 : 0);
      }
      break;
      case "進捗":
      break;
    }

    return list.map(idol => idol.name);
  }

  /**
   * ステップ一覧を返却する
   */
  stepList(name: string): string[]{
    const temp = [
      "1. ユニットセンター",
      "2. ソロライブ",
      "3. 親愛度を+50",
      "4. アイドルコミュ",
      "5. お仕事",
      "6. 劇場で触れ合い",
      `7. 指定曲(${this.idolNameToMusic[name]})`,
      "8. 記念カードを覚醒",
      "9. スキルLv.5",
      "10. 親愛度を+200",
      "11. SSR+にする",
      "完了！"
    ];
    return temp;
  }
}
