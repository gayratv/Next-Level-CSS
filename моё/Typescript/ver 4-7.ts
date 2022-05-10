type Param<T> = {
  a(p: number): T;
  b(p: T): void;
};
declare function f<T>(param: Param<T>): void;

f({ a: () => 100, b: x => x.toFixed() }); // Ok
f({ a: n => n, b: (x: number) => x.toFixed() }); // Ok
f({ a: n => n, b: x => x.toFixed() });  // Было Error, стало Ok
f({ a: function() { return 100 }, b: x => x.toFixed() });  // Было Error, стало Ok
f({ a: function() { return 100 }, b: x => x.toFixed() });  // Было Error, стало Ok


// ********************
// необходимо получить тип первого элемента кортежа, но только тогда, когда этот тип совместим с number
type FirstNumberItem<T> =
  T extends [infer S extends number, ...unknown[]] ? S : never;

// type A = number
type A = FirstNumberItem<[number, boolean, string]>;

// type B = 100
type B = FirstNumberItem<[100, boolean, string]>;

// type C = 100 | 500
type C = FirstNumberItem<[100 | 500, boolean]>;

// type D = never
type D = FirstNumberItem<[boolean, number, number]>;    