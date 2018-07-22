import { Component, OnInit } from '@angular/core';
import { ReactiveProperty } from 'src/app/model/ReactiveProperty';
import { SettingService } from '../setting/setting.service';

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
    this.idolName.subcribe((newValue) => console.log(newValue));
    this.idolType.subcribe((newValue) => console.log(newValue));
    this.sortType.subcribe((newValue) => console.log(newValue));
    this.sortMode.subcribe((newValue) => console.log(newValue));
  }

}
