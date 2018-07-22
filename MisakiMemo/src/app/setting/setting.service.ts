import { Injectable } from '@angular/core';
import { Setting } from './Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  data: Setting;

  /**
   * 設定を保存する処理
   * @param saveData 設定情報(JSON文字列)
   */
  private saveFunc(saveData: string){
    window.localStorage.setItem("saveData", saveData);
  }

  constructor() {
    this.data = new Setting(this.saveFunc);
    const saveData = window.localStorage.getItem("saveData");
    if(saveData != null){
      this.data.fromString(saveData);
    }
  }
}
