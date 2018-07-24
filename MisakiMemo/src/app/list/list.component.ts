import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
import { SettingService } from '../service/setting.service';
import { IdolMemo } from '../service/IdolMemo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /**
   * アイドル名→指定曲の対応表
   */
  private idolNameToMusic: { [key: string]: string } = {};

  private idolHash: { [key: string]: number } = {};

  /**
   * コンストラクタ
   * @param database データベースサービス
   * @param setting 設定サービス
   */
  constructor(private database: DatabaseService, private setting: SettingService) {
  }

  async ngOnInit() {
    let index = 0;
    for (let idol of await this.database.getIdolList()) {
      this.idolHash[idol.name] = index;
      ++index;
      this.idolNameToMusic[idol.name] = idol.music;
    }
  }

  /**
   * アイドル一覧を返却する
   */
  get idolList(): IdolMemo[] {
    let list = this.database.IdolList;

    // キャラ名フィルタ
    const idolName = this.setting.data.idolName;
    if (idolName != "") {
      list = list.filter(idol => idol.name.includes(idolName) || idol.ruby.includes(idolName));
    }

    // 属性フィルタ
    const idolType = this.setting.data.idolType;
    if (idolType != "指定なし") {
      list = list.filter(idol => idol.type == idolType);
    }

    const hash = {};
    for (let temp of list) {
      hash[temp.name] = true;
    }

    // ソート処理
    const stepMemo = this.setting.data.idolStepMemo;
    const descFlg = (this.setting.data.sortMode == "降順");
    switch (this.setting.data.sortType) {
      case "アイドルID":
        if (descFlg) {
          list = list.sort((b, a) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
        } else {
          list = list.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
        }
        break;
      case "アイドル名":
        if (descFlg) {
          list = list.sort((b, a) => a.ruby > b.ruby ? 1 : a.ruby < b.ruby ? -1 : 0);
        } else {
          list = list.sort((a, b) => a.ruby > b.ruby ? 1 : a.ruby < b.ruby ? -1 : 0);
        }
        break;
      case "進捗":
        break;
    }
    return stepMemo.filter(key => hash[key.name] != null);
  }

  /**
   * ステップ一覧を返却する
   */
  stepList(name: string): { key: string, value: string }[] {
    const temp = [
      { key: "1", value: "1. ユニットセンター" },
      { key: "2", value: "2. ソロライブ" },
      { key: "3", value: "3. 親愛度を+50" },
      { key: "4", value: "4. アイドルコミュ" },
      { key: "5", value: "5. お仕事" },
      { key: "6", value: "6. 劇場で触れ合い" },
      { key: "7", value: `7. 指定曲(${this.idolNameToMusic[name]})` },
      { key: "8", value: "8. 記念カードを覚醒" },
      { key: "9", value: "9. スキルLv.5" },
      { key: "10", value: "10. 親愛度を+200" },
      { key: "11", value: "11. SSR+にする" },
      { key: "12", value: "完了！" }
    ];
    return temp;
  }

  /**
   * 進捗を変更
   * @param step 進捗
   * @param name アイドル名
   */
  changeStep(step: string, name: string) {
    this.setting.data.idolStepMemo[this.idolHash[name]].step = step;
    this.setting.save();
  }

  /**
   * 詳細を変更
   * @param comment 詳細
   * @param name アイドル名
   */
  changeComment(comment: string, name: string) {
    this.setting.data.idolStepMemo[this.idolHash[name]].comment = comment;
    this.setting.save();
  }
}
