import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../setting/database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get idolNameList(): string[]{
    return this.database.IdolList.map(idol => idol.name);
  }

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

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

}
