function merge<T1, T2> (a: T1, b: T2) {
  return {
    ...a,
    ...b
  }
}

const merged = merge({ foo: '123' }, { foof: '1234', varr: '12345'})

function wrap<T> (param: T) {
  return { param }
}

const wraped = wrap(10)

// interface Items<T> {
type Items<T, V> = {
  list: T[]
  value: V
}

const items: Items<number, string> = {
  list: [1, 2, 2],
  value: 'st'
}

class Queue<T> {
  list: T[] = []
  get listLegth () {
    return this.list.length
  }

  enqueue (item: T) {
    this.list.push(item)
  }

  dequeue () {
    return this.list.shift()
  }
}

const queue = new Queue<number>()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

while (queue.listLegth > 0) {
  console.log(queue.dequeue())
}