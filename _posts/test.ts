const aaa: { <T,U> }=  U => {
    return a;
}


function map<T, U>(
    arr:T[],
    f:(arg:T) => U
  ):U[] {
    return arr.map(f);
  }
  
  // 用法实例
  map<string, number>(
    ['1', '2', '3'],
    (n) => parseInt(n)
  ); // 返回 [1, 2, 3]
  