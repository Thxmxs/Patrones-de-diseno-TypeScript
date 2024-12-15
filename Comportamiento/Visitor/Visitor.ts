// Visitor interface
interface ShapeVisitor {
    visitCircle(circle: Circle): void;
    visitSquare(square: Square): void;
}

// Element interface
interface Shape {
    accept(visitor: ShapeVisitor): void;
}

// Concrete Elements
class Circle implements Shape {
    constructor(public radius: number) {}

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}

class Square implements Shape {
    constructor(public sideLength: number) {}

    accept(visitor: ShapeVisitor): void {
        visitor.visitSquare(this);
    }
}

// Concrete Visitor 1: Calcular el area
class AreaCalculator implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        const area = Math.PI * Math.pow(circle.radius, 2);
        console.log(`Circle area: ${area.toFixed(2)}`);
    }

    visitSquare(square: Square): void {
        const area = Math.pow(square.sideLength, 2);
        console.log(`Square area: ${area}`);
    }
}

// Concrete Visitor 2: Calcular el perimetro
class PerimeterCalculator implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        const perimeter = 2 * Math.PI * circle.radius;
        console.log(`Circle perimeter: ${perimeter.toFixed(2)}`);
    }

    visitSquare(square: Square): void {
        const perimeter = 4 * square.sideLength;
        console.log(`Square perimeter: ${perimeter}`);
    }
}

// Cliente
const shapes: Shape[] = [
    new Circle(5),
    new Square(4)
];

const areaCalculator = new AreaCalculator();
const perimeterCalculator = new PerimeterCalculator();

console.log("Calculating Area:");
shapes.forEach(shape => shape.accept(areaCalculator));

console.log("\nCalculating Perimeter:");
shapes.forEach(shape => shape.accept(perimeterCalculator));
