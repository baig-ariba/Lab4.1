//Task 1

function formatFullName(firstName, lastName) {
    firstName = firstName.trim();
    lastName = lastName.trim();
    if (Number(lastName.length) === 0 || Number(firstName.length) === 0) {
        return "Invalid name input";
    } else {
        firstName =
            firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        lastName =
            lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
        let fullName = lastName + ", " + firstName;
        return `Full name is: ${fullName}`;
    }
}

console.log("Task 1");
console.log(formatFullName("    ariba   ", ""));
console.log(formatFullName("    ariba   ", "baig"));
console.log("");

//Task 2

function calculateTotalCost(price, quantity, taxRate) {
    if (typeof price === "number" && typeof quantity === "number" && typeof taxRate === "number") {
        let totalCost = (price * quantity) * (1 + taxRate);
        return `Total Cost is: $${totalCost}`;
    }
    else {
        return "Invalid input"
    }
}

console.log("Task 2");
console.log(calculateTotalCost(1, 4, "b"));
console.log(calculateTotalCost(1, 4, 4.5));
console.log("");

//Task 3

function checkEligibility(age, isEmployed) {
    if (age > 18) {
        if (isEmployed === "Y") {
            return `You are ${age} and employed so you are eligible.`
        }
        else {
            return `You are ${age} and employed so you are conditionally eligible.`
        }
    }
    else {
        return `Sorry you are not eligible since you are less than 18.`
    }
}

console.log("Task 3");
console.log(checkEligibility(19, "Y"));
console.log(checkEligibility(19, "N"));
console.log(checkEligibility(15, "Y"));
console.log(checkEligibility(18, "Y"));
console.log("");

//Task 4

function calculateTC(price, quantity, taxRate, discount) {
    if (typeof price === "number" && typeof quantity === "number" && typeof taxRate === "number") {
        let oTotalCost = (price * quantity) * (1 + taxRate);
        if (typeof discount === "number") {
            let totalCost = ((price * quantity) * (1 - (discount / 100)) * (1 + taxRate));
            return `The original total was $${oTotalCost} you got a discount ${discount}% so the total cost now is: $${totalCost}`;
        }
        else{
            return `Total Cost is: $${oTotalCost}`;
        }
    }
    else {
        return "Invalid input"
    }
}

console.log("Task 4");
console.log(calculateTC(1, 4, "b", 5));
console.log(calculateTC(1, 4, 4.5, ""));
console.log(calculateTC(1, 4, 4.5, 50));
console.log(calculateTC(1, 4, 4.5, 0));