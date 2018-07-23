import { ReactiveProperty } from "../model/ReactiveProperty";

/**
 * 設定情報を格納するクラス
 */
export class Setting {
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

    /**
     * 設定を保存するメソッド
     */
    private saveFunc: (saveData: string) => void;

    /**
     * コンストラクタ
     * @param func セーブするロジック
     */
    constructor(func: (saveData: string) => void) {
        this.saveFunc = func;

        // 設定が変更された際に保存処理が走るようにする
        this.idolName.subcribe(() => this.saveFunc(this.toString()));
        this.idolType.subcribe(() => this.saveFunc(this.toString()));
        this.sortType.subcribe(() => this.saveFunc(this.toString()));
        this.sortMode.subcribe(() => this.saveFunc(this.toString()));
    }

    /**
     * JSON文字列から変換
     * @param jsonString セーブデータ
     */
    fromString(jsonString: string) {
        const data = JSON.parse(jsonString);
        this.idolName.value = data["idolName"];
        this.idolType.value = data["idolType"];
        this.sortType.value = data["sortType"];
        this.sortMode.value = data["sortMode"];
    }

    /**
     * JSON文字列に変換
     */
    toString(): string {
        const data = {};
        data["idolName"] = this.idolName.value;
        data["idolType"] = this.idolType.value;
        data["sortType"] = this.sortType.value;
        data["sortMode"] = this.sortMode.value;
        return JSON.stringify(data);
    }
}