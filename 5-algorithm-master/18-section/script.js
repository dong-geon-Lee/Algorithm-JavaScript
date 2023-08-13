class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `당신은 ${this.firstName}${this.lastName} ${this.grade} 입니다.`;
  }
  markLate() {
    this.tardies += 1;
    return `당신은 ${this.tardies}회 늦었습니다.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

const reuslt1 = new Student("이", "동건", 4);
const reuslt2 = new Student("이", "동경", 2);

console.log(reuslt1.fullName());

console.log(reuslt2.markLate());
console.log(reuslt2.addScore(50));
console.log(reuslt2.addScore(20));
console.log(reuslt2.calculateAverage());
