//PARENT SHAPE CLASS
class Shape {
    constructor() {
        this.width = 300;
        this.height = 200;
    }
}

// CIRCLE CLASS
class Circle extends Shape {
    constructor(fillColor, textColor, text) {
        super();
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        var shapeString = `
<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
<circle cx="50" cy="50" r="40" fill="${this.fillColor}" />
<text x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>
        `
        return shapeString;
    }
}
//TRIANGLE CLASS
class Triangle extends Shape {
    constructor(fillColor, textColor, text) {
        super();
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        var shapeString = `
<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
<polygon points="50,10 90,90 10,90" fill="${this.fillColor}" />
<text x="50" y="70" font-family="Arial" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>
            `
        return shapeString;
    }
}
//SQUARE CLASS
class Square extends Shape {
    constructor(fillColor, textColor, text) {
        super();
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        var shapeString = `
<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">
<rect width="80" height="80" x="10" y="10" fill="${this.fillColor}" />
<text x="50" y="60" font-family="Arial" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}"</text>
</svg>
            `
        return shapeString;
    }
}
module.exports = { Circle, Triangle, Square}