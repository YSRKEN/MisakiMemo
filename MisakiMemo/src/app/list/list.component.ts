import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  idolNameList: string[] = [
    "天海春香",
    "如月千早",
    "星井美希",
    "春日未来",
    "最上静香",
    "伊吹翼"
  ];

  stepList: string[] = [
    "1. ユニットセンター",
    "2. ソロライブ",
    "3. 親愛度を+50",
    "4. アイドルコミュ",
    "5. お仕事",
    "6. 劇場で触れ合い",
    "7. 指定曲",
    "8. 記念カードを覚醒",
    "9. スキルLv.5",
    "10. 親愛度を+200",
    "完了！"
  ];

  constructor() { }

  ngOnInit() {
  }

}
