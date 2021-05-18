const message: string = 'test';
console.log('message', message);

let count = 0;
count += 1;
// count = 'test'

const result: boolean = true 
const list: number[] = [1, 2]
const txtList: string[] = ['1', '2']

// txtList.push(2)

let mightBeUndefined: string | undefined = undefined
let nullableNum: number | null = null

let nickname: 'woogie' | 'ddunie' = 'woogie'

function sum (a: number, b: number): number {
  return a + b
}
const sumResult = sum(1, 2)
console.log(sumResult)

function sumArray (list: number[]): number {
  return list.reduce((acc, current) => acc + current, 0)
}

const sumArrayResult = sumArray([1, 2, 3])
console.log(sumArrayResult)

function test2(): string | number {
  return 4
}

function test (): void {
  // return 'd'
}

test()