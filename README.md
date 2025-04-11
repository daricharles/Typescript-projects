# TypeScript Mini-Projects

This repo contains TypeScript/JavaScript mini-projects demonstrating basic programming concepts.

## Structure

```
.vscode/
    settings.json
Day_1/
    day1_miniProject.js
    day1_miniProject.ts
Day_2/
    student_profile_card.js
    student_profile_card.ts
```

### `.vscode/settings.json`
Workspace settings, including spellcheck words:
```json
{
    "cSpell.words": [
        "Dari"
    ]
}
```

---

## Projects

### Day 1: Mini Project
Basic TypeScript syntax, string concatenation.

#### Files:
- [day1_miniProject.ts](Day_1/day1_miniProject.ts): TS source.
- [day1_miniProject.js](Day_1/day1_miniProject.js): JS transpiled file.

#### Code:
```ts
let userName: string = "Charles Dari";
let greetings: string = "Hello, " + userName + "!";
console.log(greetings);
```

---

### Day 2: Student Profile Card
TypeScript types, arrays, logging.

#### Files:
- [student_profile_card.ts](Day_2/student_profile_card.ts): TS source.
- [student_profile_card.js](Day_2/student_profile_card.js): JS transpiled file.

#### Code:
```ts
let myName: string = "Charles Dari";
let myAge: number = 24;
let isStudent: boolean = true;
let courses: string[] = ["TypeScript", "Java", "JavaScript", "HTML and CSS", "Python"];

console.log("Name: " + myName);
console.log("Age: " + myAge);
console.log("Is Student: " + isStudent);
console.log("Courses: " + courses.join(", "));
```

---

## How to Run

1. **Install TypeScript**: `npm install -g typescript`
2. **Compile**: `tsc <file_name>.ts`
3. **Run**: `node <file_name>.js`

---

## Author
Charles Dari
