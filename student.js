class Student extends Person {
    constructor(name, age, gender, rollNo, course) {
        super(name, age, gender);
        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero");
        }
        this.rollNo = rollNo;
        this.course = course;
    }

    introduce() {
        return `${super.introduce()} I'm a student of ${this.course} with roll number ${this.rollNo}.`;
    }

    getStudentDetails = () => {
        return `${this.getDetails()}
                Roll Number: ${this.rollNo}
                Course: ${this.course}`;
    }
}

try {
    const student1 = new Student("David Wilson", 20, "Male", 101, "Computer Science");
    console.log(student1.getStudentDetails());
    
    const student2 = new Student("Eve Brown", 19, "Female", 0, "Mathematics");
} catch (error) {
    console.error("Error creating student:", error.message);
}
