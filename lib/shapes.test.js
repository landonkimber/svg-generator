const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle class', () => {
    test('Tests the render method on a circle', () => {
        const circle = new Circle('red', 'white', 'ABC');
        const test = circle.render();

        expect(test).toEqual(
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<circle cx="50" cy="50" r="40" fill="red" />
<text x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="white">ABC</text>
</svg>`
        );
    });
});

describe('Triangle class', () => {
    test('Tests the render method on a triangle', () => {
        const triangle = new Triangle('blue', 'yellow', 'ABC');
        const test = triangle.render();

        expect(test).toEqual(
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<polygon points="50,10 90,90 10,90" fill="blue" />
<text x="50" y="70" font-family="Arial" font-size="20" text-anchor="middle" fill="yellow">ABC</text>
</svg>`
        );
    });
});

describe('Square class', () => {
    test('Tests the render method on a square', () => {
        const square = new Square('green', 'black', 'ABC');
        const test = square.render();

        expect(test).toEqual(
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<rect width="80" height="80" x="10" y="10" fill="green" />
<text x="50" y="60" font-family="Arial" font-size="20" text-anchor="middle" fill="black">ABC"</text>
</svg>`    
        );
    });
});
