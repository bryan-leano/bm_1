
const isPalindrome = () => {
  let input = [1,2,1];
  let newInput = input.slice().reverse();
  console.log(input);
  console.log(newInput);
  if (JSON.stringify(input) === JSON.stringify(newInput)) {
    console.log("Is a Palindrome!");
  } else {
    console.log("Is not a Palindrome!");
  }
};

isPalindrome();

const jokeCategory = () => {
  .fetch(https://api.chucknorris.io/jokes/random?category={category})
};

jokeCategory();
