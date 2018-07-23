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

  constructor(private setting: SettingService) { }

  ngOnInit() {
  }

}
