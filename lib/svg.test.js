const SVG = require('./svg.js');

describe ('SVG', () => {
    describe('Text', () => {
        it('should return correct textString of SVG', () => {
            const textEx = "ABC";
            const colorEx = "blue";
            const svg = new SVG();
            const solution = `<text x="125" y="100" font-size="60" text-anchor="middle" fill="blue">ABC</text>`;
            expect(svg.setTextString(textEx, colorEx)).toEqual(solution);
        })
    })

    describe('Shape', () => {
        it('should return correct shapeOption', () => {
            const shape = 'Circle';
            const svg = new SVG();
            const solution = "Circle";
            expect(svg.setShapeOption(shape)).toEqual(solution)
        })
    })
})