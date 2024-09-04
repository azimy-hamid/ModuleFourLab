// Using the Moment.js library, try to solve the below problems:
// 1. Calculate the number of days between your birthdate and the current date
const bdayTillCurrentDate = document.getElementById("bday-till-current-date");
const bdayDiffCurrentDate = document.getElementById("bday-diff-current-date");

const myBday = moment("8 Oct 2004", "DD MMM YYYY");
let now = moment();
const daysDifference = now.diff(myBday, "days");

bdayDiffCurrentDate.innerHTML = daysDifference;

// 2. Display the number of years, months, and days between your birthdate and current date
// Example: 24 years, 8 months, and 26 days

const bdayTillCurrentDateDiffernce = document.getElementById(
  "bday-till-current-date-differnce"
);

const numberOfDayDifference = now.diff(myBday, "days");
const numberOfMonthDifference = now.diff(myBday, "months");
const numberOfYearDifference = now.diff(myBday, "years");

const bdayDiffCurrentDay = document.getElementById("bday-diff-current-day");
const bdayDiffCurrentmonth = document.getElementById("bday-diff-current-month");
const bdayDiffCurrentYear = document.getElementById("bday-diff-current-year");

bdayDiffCurrentDay.innerText += numberOfDayDifference;
bdayDiffCurrentmonth.innerText += numberOfMonthDifference;
bdayDiffCurrentYear.innerText += numberOfYearDifference;

// 3. Given two dates, display the date closest to the current date
// 4. Given two dates, display whether the first date is before or after the second date

const formSubmitBtn = document.getElementById("form-submit-btn");

formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const closestDateContainer = document.getElementById("closest-date");
  const beforeOrAfterDate = document.getElementById("before-or-after-date");

  const dateOneDay = document.getElementById("date-one-day").value;
  const dateOneMonth = document.getElementById("date-one-month").value;
  const dateOneYear = document.getElementById("date-one-year").value;

  const dateTwoDay = document.getElementById("date-two-day").value;
  const dateTwoMonth = document.getElementById("date-two-month").value;
  const dateTwoYear = document.getElementById("date-two-year").value;

  const dateOne = moment(
    `${dateOneDay} ${dateOneMonth} ${dateOneYear}`,
    "DD MM YYYY"
  );
  const dateTwo = moment(
    `${dateTwoDay} ${dateTwoMonth} ${dateTwoYear}`,
    "DD MM YYYY"
  );

  console.log(dateOne);
  let now = moment();
  const dayDiffBetweenNowAndDateOne = now.diff(dateOne, "days");
  const dayDiffBetweenNowAndDateTwo = now.diff(dateTwo, "days");
  console.log(dayDiffBetweenNowAndDateOne);
  console.log(dayDiffBetweenNowAndDateTwo);

  if (dayDiffBetweenNowAndDateOne < dayDiffBetweenNowAndDateTwo) {
    closestDateContainer.innerText = `The closed date to now is: ${dateOne._i}`;
    beforeOrAfterDate.innerText = `The first date is after the second one! First date: (${dateOne._i}) Second Date is (${dateTwo._i})`;
  } else if (dayDiffBetweenNowAndDateOne > dayDiffBetweenNowAndDateTwo) {
    closestDateContainer.innerText = `The closed date to now is: ${dateTwo._i}`;
    beforeOrAfterDate.innerText = `The second date is after the first one! Second date: (${dateTwo._i}) First Date is (${dateOne._i})`;
  } else {
    closestDateContainer.innerText = "They are both the same";
    beforeOrAfterDate.innerText = `They are both the same! Second date: (${dateTwo._i}) First Date is (${dateOne._i})`;
  }
});
// 5. Display the current time in London

const timeInLondon = document.getElementById("time-in-london");

const londonTime = moment.tz("Europe/London").format("HH:mm:ss");

console.log(londonTime);

timeInLondon.innerText = londonTime;
