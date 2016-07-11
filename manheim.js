// They can use Java, or Ruby, or another language like Python or javascript
// They can put the phone down when ready to code, use the speaker or headset
// While on the phone, email them the problem exercise below
// Give them 2-3 minutes to read and comprehend
// They are not allowed to google the answer.
// Tell them to start coding and that they will be timed.  If the candidate takes more than 5 minutes, do not submit.  At the end of the time, if they have the correct answer and took less than 5 minutes, record the time, take a screenshot of the code and forward to us :)

// Here is the exercise to do on join.me:
// The Question:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Meagan Howell | Technical Recruiter
// Brooksource
// 3525 Piedmont Rd. NE | | Bldg 5, Suite 775 | Atlanta, GA 30305
// 470-419-2503 Direct

var answer = 0;
for (var i = 0; i < 1000; i += 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    answer += i;
  }
};
  console.log(answer);
