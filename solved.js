// Problem 01:
function anaToVori(ana) {
  // error handle code start
  if (typeof ana != "number") {
    return "Please, Enter a valid Number!";
  }
  // error handle code end
  let convertInVori = ana * 0.0625;
  return convertInVori;
}
let inputAna = anaToVori(32);
console.log(inputAna);
// Problem 02:
function pandaCost(singara, somucha, zilapi) {
  // error handle code start
  if (typeof singara != "number") {
    return "Please, Enter a valid Number!";
  } else if (typeof somucha != "number") {
    return "Please, Enter a valid Number!";
  } else if (typeof zilapi != "number") {
    return "Please, Enter a valid Number!";
  }
  // error handle code end
  // Per Unit Price
  const perSingaraPrice = 7;
  const perSomuchaPrice = 10;
  const perZilapiPrice = 15;
  // Price depending on Quantity
  let singaraQuantity = perSingaraPrice * singara;
  let somuchaQuantity = perSomuchaPrice * somucha;
  let zilapiQuantity = perZilapiPrice * zilapi;
  // Sum Of All Items
  let totalPrice = singaraQuantity + somuchaQuantity + zilapiQuantity;
  return totalPrice;
}
let inputFoodQuantity = pandaCost(1, 1, 1);
console.log(inputFoodQuantity);
// Problem 03:
function picnicBudget(person) {
  // Per Person Budget Depending On Person Increasing Numbers
  const first100PerPersonFee = 5000;
  const second100PerPersonFee = 4000;
  const thirdInfinityPerPersonFee = 3000;
  // Error Handle Code start
  if (person <= 0 || typeof person != "number") {
    return "Please Enter a vaild Number!";
  }
  // Error Handle Code End
  // budget Calculation Code Start
  let countBudget = 0;
  if (person <= 100) {
    countBudget = person * first100PerPersonFee;
    return countBudget;
  } else if (person >= 100 && person <= 200) {
    let first100PersonSubmission = 100 * first100PerPersonFee;
    let second100PersonSubmission = (person - 100) * second100PerPersonFee;
    countBudget = first100PersonSubmission + second100PersonSubmission;
    return countBudget;
  } else {
    let first100PersonSubmission = 100 * first100PerPersonFee;
    let second100PersonSubmission = 100 * second100PerPersonFee;
    let thirdInfinityPersonSubmission =
      (person - 200) * thirdInfinityPerPersonFee;
    countBudget =
      first100PersonSubmission +
      second100PersonSubmission +
      thirdInfinityPersonSubmission;
    return countBudget;
  }
  // Budget Calculation code End
}
let inputperson = 5;
let result = picnicBudget(inputperson);
console.log(result);
// problem 04:
function oddFriend(array) {
  let findOddFriend = [""];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    // error handle code start
    if (typeof element == "number") {
      return "Please, Enter a String array not Number array!";
    }
    // error handle code end
    if (element.length % 2 != 0) {
      findOddFriend = element;
      return findOddFriend;
    }
  }
}
let friendList = ["siam", "monir", "nayemd", "jubair", "abdur", "rafi"];
let numararray = [1, 2];
let firstOddFriend = oddFriend(friendList);
console.log(firstOddFriend);
