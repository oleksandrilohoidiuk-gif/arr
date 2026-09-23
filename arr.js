// Генерація
function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomNum);
    }
    return arr;
}
// Task 1
function countAndSumEvenInRange(arr, start, end) {
    let count = 0;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if ((arr[i] & 1) === 0) {
            count++;
            sum += arr[i];
        }
    }

    return { count, sum };
}

// Check 1
const arr1 = generateRandomArray(10, -20, 20);
// console.log("1. Масив:", arr1);

const testArray = generateRandomArray(10, -20, 20);
const result1 = countAndSumEvenInRange([  17, -12, 13, 16, -12, 14,  19, 18, 17,  14], 2, 7);
console.log(`Кількість парних елементів з індексу 2 по 7: ${result1.count}`);
console.log(`Сума парних елементів з індексу 2 по 7: ${result1.sum}`);

console.log(6 & 1)
console.log(7 & 1)

// Task 2
function countAboveAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }

    return { average, count };
}

// Check 2
console.log("\n 2. Масив:", arr1);

const result2 = countAboveAverage(arr1);
console.log(`Середнє арифметичне: ${result2.average}`);
console.log(`Кількість елементів, більших за середнє: ${result2.count}`);

// Task 3
const arr2 = generateRandomArray(11, -20, 20);

function pairSum(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Масиви повинні мати однакову довжину!");
    }

    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }

    return result;
}

// Check 3
console.log("\n3. Масив 1:", arr1);
console.log("3. Масив 2:", arr2);

const result3 = pairSum(arr1, arr2);
console.log("Результат (попарна сума):", result3);

// Task
function arrays(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arrA.length; i++) {
        result.push(arr1[i]);
    }

    for (let i = 0; i < arrB.length; i++) {
        result.push(arr2[i]);
    }

    return result;
}

// Check 4
const arrA = generateRandomArray(4, -10, 10);
const arrB = generateRandomArray(8, -10, 10);
console.log("\n4. Масив A:", arrA);
console.log("4. Масив B:", arrB);

const result4 = arrays(arrA, arrB);
console.log("Результат (конкатенація):", result4);

// Task 5
function swapMaxMin(arr) {

    let maxIndex = 0;
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    const temp = arr[maxIndex];
    arr[maxIndex] = arr[minIndex];
    arr[minIndex] = temp;

    return arr;
}

// Check 5
const arr5 = generateRandomArray(8, -20, 20);
console.log("\n5. Масив до:", arr5);

const result5 = swapMaxMin(arr5);
console.log("5. Масив після (max і min поміняні місцями):", result5);

// Task 6

function positiveNegativeArr(arr) {
    const positive = [];
    const negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positive.push(arr[i]);
        } else if (arr[i] < 0) {
            negative.push(arr[i]);
        }
    }

    return { positive, negative };
}

// Check 6
const arr6 = generateRandomArray(10, -20, 20);
console.log("\n6. Масив:", arr6);

const result6 = positiveNegativeArr(arr6);
console.log("Додатні елементи:", result6.positive);
console.log("Від'ємні елементи:", result6.negative);

// Task 7
function removeMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const result = [];
    let maxUsed = false;
    let minUsed = false;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (value === max) {
            if (!maxUsed) {
                result.push(value);
                maxUsed = true;
            }
        } else if (value === min) {
            if (!minUsed) {
                result.push(value);
                minUsed = true;
            }
        } else {
            result.push(value);
        }
    }

    return result;
}

// Check 7
const arr7 = generateRandomArray(10, -5, 5);
console.log("\n7. Масив:", arr7);
const result7 = removeMaxMin(arr7);
console.log("Масив без дублікатів max/min:", result7);

// Task 8

function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function elementsBetweenAverages(arr1, arr2) {
    const avg1 = getAverage(arr1);
    const avg2 = getAverage(arr2);

    const lowerBound = Math.min(avg1, avg2);
    const upperBound = Math.max(avg1, avg2);

    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= lowerBound && arr1[i] <= upperBound) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] >= lowerBound && arr2[i] <= upperBound) {
            result.push(arr2[i]);
        }
    }

    return { avg1, avg2, result };
}

// Check 8
const arr8a = generateRandomArray(8, -15, 15);
const arr8b = generateRandomArray(8, -15, 15);
console.log("\n8. Масив 1:", arr8a);
console.log("8. Масив 2:", arr8b);

const result8 = elementsBetweenAverages(arr8a, arr8b);
console.log(`Середнє масиву 1: ${result8.avg1}`);
console.log(`Середнє масиву 2: ${result8.avg2}`);
console.log("Елементи обидвох масивів між середніми:", result8.result);
