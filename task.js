const students = ["Priya", "Arun", "Divya", "Rahul", "Sneha"]

// 1. Find the first and last student names.
console.log(students[0])
console.log(students[students.length-1])

// 2. Add "Karthik" to the end of the array.
students.push("Karthik")
console.log(students)

// 3. Remove the last student from the array.
students.pop();
console.log(students)

// 4. Slice: Create a new array containing "Arun", "Divya", and "Rahul".
const updated = students.slice(1,4)
console.log(updated)

// 5. Remove "Divya" from the original array
students.splice(2,1)
console.log(students)