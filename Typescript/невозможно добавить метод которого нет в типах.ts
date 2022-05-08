/*
 * Copyright (c) 2022. Write by Gayrat
невозможно добавить метод которого нет в типах.ts
*
* Максим Храмцов
* @khraks_mamtsov
* https://t.me/ts_cool
*
* https://fettblog.eu/typescript-match-the-exact-object-shape/
*
* @risenforces - админ группы
*
*
* developing frontend in aviasales.ru
* @undefned
* アレクサンダー・バキマトフ
 */

type ValidateShape<T, Shape> =
  T extends Shape ?
    Exclude<keyof T, keyof Shape> extends never ? T : never : never;


interface IA {
  a(): void;
}

class B implements ValidateShape<B, IA> {
  a(){

  }
  asd(): {}
}