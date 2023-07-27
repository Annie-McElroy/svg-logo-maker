class SVG {
    constructor() {
    this.textString = '';
    this.shapeOption = '';
    }

    render() {

        return `
            <svg 
            version="1.1" 
            width="300" height="200" 
            xmlns="http://www.w3.org/2000/svg">

            ${this.shapeOption}

            ${this.textString}
            `
    }

    setText(text, color) {
        this.textString = `
        <text x="125" y="100" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        `
    }

    setShape(shape){
        this.shapeOption = shape.render
    }
}

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