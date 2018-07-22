import { ReactiveProperty } from "../model/ReactiveProperty";

/**
 * 設定情報を格納するクラス
 */
export class Setting{
  /**
   * アイドル名で絞り込むための入力
   */
  idolName = new ReactiveProperty<string>("");

  /**
   * アイドルの属性で絞り込むための入力
   */
  idolType = new ReactiveProperty<string>("指定なし");

  /**
   * リストの並び替え方法
   */
  sortType = new ReactiveProperty<string>("アイドルID");

  /**
   * リストの並び替え方向
   */
  sortMode = new ReactiveProperty<string>("昇順");

}