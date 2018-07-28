/**
 * アイドルについての情報を保持するクラス
 */
export class IdolData{
    /**
     * アイドルID
     */
    id: number;

    /**
     * アイドル名
     */
    name: string;

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
}