import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  /**
   * アイドル名で絞り込むための入力
   */
  idolName: string = "";

  /**
   * アイドルの属性で絞り込むための入力
   */
  idolType: string = "指定なし";

  /**
   * リストの並び替え方法
   */
  sortType: string = "アイドル";

  /**
   * リストの並び替え方向
   */
  sortMode: string = "昇順";


  constructor() { }

  ngOnInit() {
  }

}
