class shape{
constructor(color) {
  this.color=color;
}
}

class Circle extends shape{
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends shape{
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }

}
class Rectangle extends shape{
  render() {
    return ` <rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }

}

module.exports={Circle,Triangle,Rectangle}