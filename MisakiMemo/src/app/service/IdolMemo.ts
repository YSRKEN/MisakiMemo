/**
 * アイドルの進捗情報
 */
export class IdolMemo{
    /**
     * アイドルID
     */
    id: number;

    /**
     * アイドル名
     */
    name: string;

    /**
     * 段階
     */
    step: string;

    /**
     * コメント
     */
    comment: string;

    /**
     * アイドル名ルビ
     */
    ruby: string;

    /**
     * アイドルの属性
     */
    type: string;

    /**
     * アイドルに割り振られた楽曲
     */
    music: string;

    /**
     * アイドルに割り振られたイメージカラー
     */
    color: string;

    /**
     * アイドルの属性マーク
     */
    get type2(): {}{
        switch(this.type){
            case "Princess":
            return {color: "hotpink"};
            case "Fairy":
            return {color: "dodgerblue"};
            case "Angel":
            return {color: "orange"};
            default:
            return {color: "black"};
        }
    }

    /**
     * アイドルの属性マーク
     */
    get type3(): {}{
        return {color: this.color};
    }
}