function findEvenNumbers(arr: number[]): number[] {
    const evenNumbers: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]