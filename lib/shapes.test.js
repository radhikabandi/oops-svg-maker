const {Circle,Triangle,Rectangle}= require('./shapes');


describe('shape test',()=>{
  it('should return circle property with color passed when using object of Circle class',()=>{
const shape= new Circle('red')
   expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
  })

  it('should return rectangle property with color passed when using object of rectangle class',()=>{
    const shape= new Rectangle('blue')
    expect(shape.render()).toEqual(' <rect x="73" y="40" width="160" height="160" fill="blue" />')
  })

  it('should return Triangle property with color passed when using object of rectangle class',()=>{
    const shape= new Triangle('pink')
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink" />')
  })
})
