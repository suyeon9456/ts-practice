
interface Shape {
  getArea(): number
}

class Circle implements Shape {
  // radius: number

  constructor(public radius: number) { // public private 은 typescript에서만 의미있음 js파일에선 똑같음
    // this.radius = radius
  }

  getArea() {
    return this.radius * this.radius  * Math.PI
  }
}

const circle = new Circle(10)

class Rectangle implements Shape {
  // width: number
  // height: number

  constructor (private width: number, private height: number) {
    // this.width = width
    // this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(5, 6)

const shapes: Shape[] = [circle, rectangle]

shapes.forEach(area => console.log(area.getArea()))

///////////////////////////////////////////////////////////////////
// interface Person {
type Person = {
  name: string,
  age?: number
}

type Developer = Person & {
  skills: string[]
}

const person: Person = {
  name: 'suyeon',
  age: 28
}

const developer: Developer = {
  name: 'suyeon',
  skills: ['javascript', 'typescript', 'react', 'vue', 'java']
}

type People = Person[]
const people: People = [person, developer]

type Color = 'yellow' | 'orange' | 'red'
const color: Color = 'yellow'