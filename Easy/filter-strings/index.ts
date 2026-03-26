function filterStrings(arr: (string | number | boolean)[]): string[] {
    const arrayOfData: string[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            arrayOfData.push(arr[i] as string);
        }
    }

    return arrayOfData;
}

console.log(filterStrings(["hello", 123, true, "world"])); // ["hello", "world"])
console.log(filterStrings([false, "TS", 42, "JS"])); // ["TS", "JS"]