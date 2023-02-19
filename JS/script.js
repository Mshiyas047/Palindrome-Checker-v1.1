function checkPalindrome() {
    let input = document.getElementById("input").value;
    let isPalindrome = palindrome(input);
    if (isPalindrome) {
      document.getElementById("result").innerHTML = `"${input}" is a palindrome!`;
      document.getElementById("result").classList.remove("error");
    } else {
      document.getElementById("result").innerHTML = `"${input}" is not a palindrome.`;
      document.getElementById("result").classList.add("error");
    }
  }
  
  function palindrome(str) {
    let pstring = str.replace(/\W+|_/g, "").toLowerCase();
    let bstring = pstring.split("").reverse().join(""); 
    if (pstring != bstring) {
      return false;
    }
    return true;
  }
  