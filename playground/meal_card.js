

class Student{
    constructor(name, mealCard){
        this.name = name;
        this.mealCard = mealCard;
    }
}

class Food{
    constructor(name, priceInPoints){
        this.name = name;
        this.priceInPoints = priceInPoints;
    }
}

class MealCard{
    constructor(points){
        this.points = points;
    }

    addPoints(points){
        this.points+=points; 
    }

    deductPoints(points){
        this.points-=points;
    }

}

class Cafeteria{
    constructor(foodItems, students){
        this.foodItems = foodItems;
        this.students = students;
    }

    purchaseFood(foodItem, student){
        student.mealCard.deductPoints(foodItem.priceInPoints);
    }

    purchasePoints(points, student){
        student.mealCard.addPoints(points);
    }

    addStudent(student){
        this.students.push(student);
    }

    addFoodItem(foodItem){
        this.foodItems.push(foodItem);
    }
}

const foodItems = [
    new Food('Pizza', 25),
    new Food('Pasta', 20),
    new Food('Burger', 15),
]


const students = [
    new Student("Rakesh", new MealCard(100)),
    new Student("Regish", new MealCard(100))
]

const cafe = new Cafeteria(foodItems, students);



cafe.purchaseFood(foodItems[0],students[0]);

console.log(students[0].mealCard);