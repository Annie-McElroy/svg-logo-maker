class SVG {
    constructor() {
    this.textString = '';
    this.shapeOption = '';
    }

    render() {

        return `<svg 
            version="1.1" 
            width="300" height="200" 
            xmlns="http://www.w3.org/2000/svg">

            ${this.shapeOption}

            ${this.textString}
            `
    }

    setTextString(text, color) {
        this.textString = `<text x="125" y="100" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
        return this.textString;
    }

    setShapeOption(shape){
        this.shapeOption = shape;
        return this.shapeOption;
    }
}


module.exports = SVG;

// function generateShape(data) {
    
// }

// function generateSVG(data) {
//     // base svg root element
//     return `<svg 
//         version="1.1" 
//         width="300" height="200" 
//         xmlns="http://www.w3.org/2000/svg">

//         ${data.shape}
//     `
// }