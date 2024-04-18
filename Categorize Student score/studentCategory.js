/*Write a JavaScript function named scoreCategory that takes a student's score as input and returns the corresponding category based on the following criteria:
Score 90 or above: return "Excellent"
Score 80-89: return "Very Good"
Score 70-79: return "Pass"
Score below 70: return "Fail".*/

function scoreCategory(score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 80 && score <= 89) {
      return "Very Good";
    } else if (score >= 70 && score <= 79) {
      return "Pass";
    } else {
      return "Fail";
    }
  }

  console.log(scoreCategory(95));      // Output: Excellent