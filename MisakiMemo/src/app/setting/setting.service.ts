import { Injectable } from '@angular/core';
import { Setting } from './Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  /**
   * 保存時に使用する定数
   */
  private readonly LOCAL_STRAGE_KEY: string = "saveData";

  data: Setting;

  /**
   * 設定を保存する処理
   * @param saveData 設定情報(JSON文字列)
   */
  private saveFunc(saveData: string){
    window.localStorage.setItem(this.LOCAL_STRAGE_KEY, saveData);
  }

  constructor() {
    this.data = new Setting(this.saveFunc);
    const saveData = window.localStorage.getItem(this.LOCAL_STRAGE_KEY);
    if(saveData != null){
      this.data.fromString(saveData);
    }
  }
}
