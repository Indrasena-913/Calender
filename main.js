const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
// function MonthChange() {
// 	const currentMonth = document.getElementById("current-month");
// 	const CurrentDate = document.getElementById("full-date");
// 	currentMonth.textContent = months[currentmonthindex + 1];
// }
const today = new Date();
const currentmonthindex = today.getMonth();

const currentMonth = document.getElementById("current-month");
currentMonth.textContent = months[currentmonthindex];
const CurrentDate = document.getElementById("full-date");
CurrentDate.textContent = today.toDateString();
const firstdayofthemonth = new Date(
	today.getFullYear(),
	today.getMonth(),
	1
).getDay();
console.log(firstdayofthemonth);

const lastday = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDay();
console.log(lastday);

const numberofdaysinmonth = new Date(
	today.getFullYear(),
	today.getMonth() + 1,
	0
).getDate();
console.log(numberofdaysinmonth);
let daysHTML = "";
const dayselement = document.querySelector(".weekdates");
for (let i = 0; i < firstdayofthemonth; i++) {
	daysHTML += `<p class="date"></p>`;
	console.log(daysHTML);
}
console.log(daysHTML);
dayselement.innerHTML = daysHTML;
for (let date = 1; date <= numberofdaysinmonth; date++) {
	if (today.getDate() === date) {
		daysHTML += `<p class="date today">${date}</p>`;
	} else {
		daysHTML += `<p class="date">${date}</p>`;
	}
}
console.log(daysHTML);

dayselement.innerHTML = daysHTML;

if (lastday < 6) {
	for (let date = lastday; date < 6; date++) {
		daysHTML += `<p class=date></p>`;
	}
	dayselement.innerHTML = daysHTML;
}

// const nextbutton = document.getElementsByClassName("nextbuttton")[0];
// nextbutton.addEventListener("click", MonthChange);
