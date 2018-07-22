import { Subject } from "rxjs";

/**
 * 通知機能付きの変数
 */
export class ReactiveProperty<T>{
    /**
     * 内部変数
     */
    private _value: T;

    /**
     * 通知用変数
     */
    private _subject = new Subject<T>();

    /**
     * コンストラクタ
     * @param value 初期値
     */
    constructor(value?: T){
        this._value = value;
    }

    /**
     * getter
     */
    get value(): T{
        return this._value;
    }

    /**
     * setter
     */
    set value(newValue: T){
        this._value = newValue;
        this._subject.next(this._value);
    }

    /**
     * 変更通知を登録する
     * @param func 関数オブジェクト
     */
    subcribe(func: (newValue: T) => void){
        this._subject.subscribe((val) => {
            func(val);
        })
    }
}