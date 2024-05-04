function getAge() {
    let birthday = new Date(1996, 10, 12);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthday.getFullYear();
    if(currentDate.getMonth() - birthday.getMonth() < 0) {
        age -= 1;
    } else if(currentDate.getMonth() - birthday.getMonth() == 0) {
        if (currentDate.getDay() - birthday.getDay() < 0) {
            age -= 1;
        }
    }
    return age;
}