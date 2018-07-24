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
}