import { IdolMemo } from "./IdolMemo";

/**
 * 設定情報を格納するクラス
 */
export class Setting {
    /**
     * アイドル名で絞り込むための入力
     */
    idolName = "";

    /**
     * アイドルの属性で絞り込むための入力
     */
    idolType = "指定なし";

    /**
     * リストの並び替え方法
     */
    sortType = "アイドルID";

    /**
     * リストの並び替え方向
     */
    sortMode = "昇順";

    /**
     * アイドル毎の進捗状況
     */
    idolStepMemo: IdolMemo[] = [];

    /**
     * JSON文字列から変換
     * @param jsonString セーブデータ
     */
    fromString(jsonString: string) {
        const data = JSON.parse(jsonString);
        this.idolName = data["idolName"];
        this.idolType = data["idolType"];
        this.sortType = data["sortType"];
        this.sortMode = data["sortMode"];
        const temp: IdolMemo[] = data["idolStepMemo"];
        this.idolStepMemo = [];
        for(let temp2 of temp){
            const idolMemo = new IdolMemo();
            idolMemo.name = temp2.name;
            idolMemo.step = temp2.step;
            idolMemo.comment = temp2.comment;
            this.idolStepMemo.push(idolMemo);
        }
    }

    /**
     * JSON文字列に変換
     */
    toString(): string {
        const data = {};
        data["idolName"] = this.idolName;
        data["idolType"] = this.idolType;
        data["sortType"] = this.sortType;
        data["sortMode"] = this.sortMode;
        data["idolStepMemo"] = this.idolStepMemo;
        return JSON.stringify(data);
    }
}