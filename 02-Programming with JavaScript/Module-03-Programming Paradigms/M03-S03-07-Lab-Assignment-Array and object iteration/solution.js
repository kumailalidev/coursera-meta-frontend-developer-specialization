// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for(var item of dairy) {
        console.log(item);
    }
}
logDairy();


// Task 2
function birdCan() {
    const animal = {
        canJump: true
    };
    
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (var key of Object.keys(bird)) {
        console.log(key + ": " + bird[key]);
    }
}
birdCan();

// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };
    
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (var key in bird) {
        console.log(key + ": " + bird[key]);
    }
}
animalCan();
