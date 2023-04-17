class Student {
	constructor(firstName, lastName, birthDay, marks) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDay = birthDay;
		this.marks = marks;
		this.absence = new Array(25);
		this.absenceIndex = 0;
		this.age = this.getAge(birthDay);
		this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
		this.presenceFactor = 0.9;
		this.goodMarksMin = 90;
		this.results = {
			BAD: "Редиска!",
			GOOD: "Добре, але можна краще",
			EXCELLENT: "Молодець!!"
		};
	}

	absent() {
		if (this.absence.length > this.absenceIndex) {
			this.absence[this.absenceIndex] = false;
			this.absenceIndex++;
		}
	};

	present() {
		if (this.absence.length > this.absenceIndex) {
			this.absence[this.absenceIndex] = true;
			this.absenceIndex++;
		}
	};
	

	get averagePresence() {
		let presenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
		return presenceCount / this.absenceIndex;
	}

	getAge(dateString) {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	summary() {
		if (this.averageMark < this.goodMarksMin && this.averagePresence < this.presenceFactor) {
			console.log(this.results.BAD);
		} else if (this.averageMark < this.goodMarksMin || this.averagePresence < this.presenceFactor) {
			console.log(this.results.GOOD);
		} else {
			console.log(this.results.EXCELLENT);
		}
	}
}

let student1 = new Student('Kyrylo', 'Uragan', '03.03.1985', [50, 55, 55]);
let student2 = new Student('Vladusik', 'Busik', '01.02.1993', [90, 90, 80]);

student1.present();
student1.present();
student1.present();

student2.absent();
student2.absent();
student2.absent();

student1.summary();
student2.summary();
