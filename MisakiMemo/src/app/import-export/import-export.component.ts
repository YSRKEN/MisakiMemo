import { Component, OnInit } from '@angular/core';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  saveData: string = "";

  constructor(private setting: SettingService) { }

  ngOnInit() {
  }

  /**
   * セーブデータをBase64形式でエクスポートする
   */
  exportSaveData() {
    // 進捗状況を取り出す
    const saveData = this.setting.data.idolStepMemo.map(memo => parseInt(memo.step));

    // 字数を減らすため、進捗状況を2つづつパックする
    const saveData2 = [];
    for (let i = 0; i < saveData.length; i += 2) {
      const temp = (saveData[i] << 4) | saveData[i + 1];
      saveData2.push(temp);
    }

    // 進捗状況をバイナリデータの文字列にする
    const saveDataStr = String.fromCharCode(...saveData2);

    // バイナリデータの文字列をBase64変換する
    const base64Str = btoa(saveDataStr);
    this.saveData = base64Str;
  }

  /**
   * Base64形式のデータからセーブデータをインポートする
   */
  importSaveData() {
    if(!window.confirm("セーブデータをインポートしますか？\n(入力されたデータは上書きされます))")){
      return;
    }
    try {
      // Base64文字列をデコードする
      const saveDataStr = atob(this.saveData);

      // デコードした文字列を進捗状況に直す
      const saveData = [];
      for (let i = 0; i < saveDataStr.length; ++i) {
        const temp = saveDataStr.charCodeAt(i);
        saveData.push(temp >> 4);
        saveData.push(temp & 0b1111);
      }

      // 進捗状況のバリデーションをチェックする
      if (saveData.length != this.setting.data.idolStepMemo.length
        || saveData.filter(n => n < 1 || n > 12).length > 0) {
        window.alert("エラー：このセーブデータはインポートできません。");
        return;
      }

      // 進捗状況を上書きする
      for (let i = 0; i < saveData.length; ++i) {
        this.setting.data.idolStepMemo[i].step = "" + saveData[i];
      }
      this.setting.save();
      window.alert("インポートが完了しました。");
    } catch (e) {
      console.error(e);
      window.alert("エラー：このセーブデータはインポートできません。");
      return;
    }
  }
}
