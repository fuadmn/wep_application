//filter() method // waxaa lagu filtergareeyaa liska
// tudaalee waxad arabtaa inaad kala reebto dad list arday gacata ku heesaa waxa rabtaa liska dadka bontadood ka badan yahay 60 dad kale iska soo rebto

const number = [1, 2, 3, 4, 5, 6];

const eventNumber = number.filter((number) => number % 2 === 0);
console.log(eventNumber);

const score = [40, 50, 60, 70, 90];

const pass = score.filter((score) => score >= 60); //score waxa noo soo celisaa weye

console.log(pass);
