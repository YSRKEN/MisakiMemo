import { Component, OnInit } from '@angular/core';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  /**
   * アイドル名で絞り込むための入力
   */
  idolName = this.setting.data.idolName;

  /**
   * アイドルの属性で絞り込むための入力
   */
  idolType = this.setting.data.idolType;

  /**
   * リストの並び替え方法
   */
  sortType = this.setting.data.sortType;

  /**
   * リストの並び替え方向
   */
  sortMode = this.setting.data.sortMode;

  /**
   * ライブ関係のみ標示するか？
   */
  liveOnlyFlg = this.setting.data.liveOnlyFlg;

  constructor(private setting: SettingService) { }

  ngOnInit() {
  }

  changeIdolName(event: string){
    this.setting.data.idolName = this.idolName = event;
    this.setting.save();
  }

  changeIdolType(event: string){
    this.setting.data.idolType = this.idolType = event;
    this.setting.save();
  }

  changeSortType(event: string){
    this.setting.data.sortType = this.sortType = event;
    this.setting.save();
  }

  changeSortMode(event: string){
    this.setting.data.sortMode = this.sortMode = event;
    this.setting.save();
  }

  changeLiveOnlyFlg(){
    this.setting.data.liveOnlyFlg = this.liveOnlyFlg;
    this.setting.save();
  }
}
