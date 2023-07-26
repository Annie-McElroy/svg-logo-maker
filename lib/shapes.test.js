const {Triangle, Square, Circle} = require('./shapes.js')

describe ('Shapes', () => {
    describe('Triangle', () => {
        it('should return triangle with correct render and color', () => {
            const shape = new Triangle();
            shape.setColor("limegreen");
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="limegreen"/>`)
        })
    })
    describe('Square', () => {
        it('should return square with correct render and color', () => {
            const shape = new Square();
            shape.setColor("blue")
            expect(shape.render()).toEqual(`<rect width="100" height="100" width="100" height="100" fill= "blue"/>`)
        })
    })
    describe('Circle', () => {
        it('should return triangle with correct render and color', () => {
            const shape = new Circle();
            shape.setColor("purple")
            expect(shape.render()).toEqual(`<circle cx="50" cy="50" r= "50" fill="purple"/>`)
        })
    })
})
