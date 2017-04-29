import colors from 'colors';

console.log('Hello world!'.underline.green);
const name = 'React Course';
console.log(`We are here today at the ${name}`);

class Shape {
  constructor({ id, x, y }) {
    this.id = id
    this.move(x, y);
  }
  move(x, y) {
    this.x = x
    this.y = y
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius = 5) {
    super({ id, x, y })
    this.radius = radius
  }
}

const item = new Circle({ id: 3, x: 5, y: 9 });
console.log(colors.green(item));
console.log(colors.rainbow(item.radius));

const styles = {
  color: '#FFF',
  border: '1px solid #000',
};

const otherStyles = {
  color: '#F00',
};

const finalStyles = {...styles, ...otherStyles };

console.log(colors.cyan(finalStyles));
