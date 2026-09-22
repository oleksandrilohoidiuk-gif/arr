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

    // Визначаємо межі діапазону (менше і більше значення)
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

// Перевірка завдання 8
const arr8a = generateRandomArray(8, -15, 15);
const arr8b = generateRandomArray(8, -15, 15);
console.log("\nЗавдання 8. Масив A:", arr8a);
console.log("Завдання 8. Масив B:", arr8b);

const result8 = elementsBetweenAverages(arr8a, arr8b);
console.log(`Середнє масиву A: ${result8.avg1}`);
console.log(`Середнє масиву B: ${result8.avg2}`);
console.log("Елементи обидвох масивів між середніми:", result8.result);
