/*
CTCI
1.1 is Unique: Implement an Algo to determine if a string has all unique characters. What if you cannot use additional Data Structures?
 */

    // Time Complexity O(n) Space Complexity O(n)
   function allUnique(string) {
       let set = new Set();
       for(let letter of string) {
           if(set.has(letter)) {
               return false;
           }else{
               set.add(letter);
           }
       }
       return true;
   }
   //
   // console.log(allUnique("abc"));
   //
   // console.log(allUnique("abbc"))
   //

   // Time Complexity O(n^2) Space Complexity O(1)
   function allUniqueNoSpace(string) {
       for(let i=0; i<string.length; i++) {
           for(let j=0; j<string.length; j++) {
               if(i === j) continue;

               if(string[i] === string[j]) {
                   return false;
               }
           }
       }
       return true;
   }

    // Time Complexity O(n) Space Complexity O(1) ---> The space does not grow with the input!
   function allUniqueConstantSpace(string) {
       let allLetters = new Array(128);
       for(let letter of string) {
            let index = letter.charCodeAt(0) - 97;
            if(allLetters[index] !== undefined) {
                return false;
            }else{
                allLetters[index] = 1;
            }
       }
    return true;
   }

   //
   //
   // console.log(allUniqueNoSpace("abc"));
   //
   // console.log(allUniqueNoSpace("abbc"));

   // console.log(allUniqueConstantSpace('abc'));
   // console.log(allUniqueConstantSpace('abbc'));


   /*
   CTCI
   1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
   */

   function checkPermutation(string1, string2) {
       let letterCount = new Array(128);
       letterCount.fill(0);
       let str1 = string1.toString().toLowerCase();
       let str2 = string2.toString().toLowerCase();

       for(let letter of str1) {
           let index = letter.charCodeAt(0) - 97;
           if(letterCount[index] === undefined) {
               letterCount[index] = 1;
           }else{
               letterCount[index]++;
           }
       }

       for(let letter of str2) {
           let index = letter.charCodeAt(0) - 97;
           if(letterCount[index] === undefined) {
               letterCount[index] = -1;
           }else{
               letterCount[index]--;
           }
       }

       for(let i =0; i<letterCount.length; i++) {
           if(letterCount[i] !== 0) {
               return false;
           }
       }

       return true;
   }
   /*

   input: "abc" "bca"
   output: True

   input: "ded" "dea"
   output: False

   input: "dee"  "de"
   output: False

    */

   //
   // console.log(checkPermutation("abc", "bca"));
   //
   // console.log(checkPermutation("ded", "dea"));
   //
   // console.log(checkPermutation("dee", "de"));
   //

   /*
   
   CTCI 1.3 URLify:  Write a method to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end
   to hold the additional characters, and that you are given the "true" length of the string.

    Example:

        Test Case 1
            Input:  Fuad Mohamoud
            Output: Fuad%20Mohamoud

        Test Case 2
            Input: Mr. John Hardeman
            Output: Mr.%20John%20Hardeman

        Test Case 3
            Input: Mustafa AKA The Op
            Output: Mustafa%20AKA%20The%20Op

 */

   function urlSolution(characterList) {
       let zeroCount = [];
       for(let i=0; i<characterList.length; i++) {
           let currValue =  characterList[i];
           if(currValue === ' '){
               zeroCount.push(i);
           }
       }

       zeroCount.forEach(index => {
           characterList[index] = '%20';
       })

       return characterList.join('');
   }
   // const test1 = "Fuad Mohamoud".split("");
   // const test2 = "Mr. John Hardeman".split("");
   // const test3 = "Mustafa AKA The Op".split("");
   // console.log(urlSolution(test1))
   // console.log(urlSolution(test2))
   // console.log(urlSolution(test3))





   /*

       1.4  Palindrome Permutation: Given a string, write a function to check if it is a palindrome. A palindrome is a word or phrase that is the same
       forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

        Test Case 1:
            Input: add
            Output: True

        Test Case 2:
            Input: M
            Output: True

         Test Case 3:
            Input: Fu
            Output: False
   */

    function isPalindromePermutation(string) {
        if(string.length < 2) {
            return true;
        }

        let letterCounter = {};
        // Loop through and make the map binding
        for(let letter of string) {
            if(letter in letterCounter) {
                letterCounter[letter] +=1;
            }else {
                letterCounter[letter] = 1;
            }
        }

        let found = false;
        for(let letter of string) {
            let count = letterCounter[letter];
            if(count% 2 !== 0) {
                if(!found) {
                    found = true;
                }else {
                    return false;
                }
            }
        }
        return true;
    }

/*
   Test Case 1:
   Input: add
   Output: True

   Test Case 2:
   Input: M
   Output: True

   Test Case 3:
   Input: Fu
   Output: False
*/

   // let testCase1 = isPalindromePermutation('add');
   // let testCase2 = isPalindromePermutation('M');
   // let testCase3 = isPalindromePermutation("Fu");
   //
   // console.log(testCase1);
   // console.log(testCase2);
   // console.log(testCase3);


   /*

   1.5 One away: There are three types of edits that can be performed on strings.
   insert a character, remove a character, or replace a character
   Given two strings, write a function to check if they are one edit (or zero edits) away.

   Test Case 1:
        Input: pale, ple
        Output: true

    Test Case 2:
        Input: pales, pale
        Output: true

    Test Case 3:
        Input: pale, bale
        Output: true

    Test Case 4:
        Input: pale, bake
        Output: false

    */

   function oneAway(s1, s2) {
       let string1 = s1.length > s2.length ? s1: s2;
       let string2 = s1.length > s2.length? s2: s1;

       let pointer1 = string1.length -1, pointer2 =string2.length -1;
       let diffCount = 0;

       while(pointer1 >= 0 && pointer2 >= 0) {
           if(string1[pointer1] === string2[pointer2]) {
               pointer1--;
               pointer2--;
           }else{
               if(string1[pointer1] !== string2[pointer2]) {
                   if(diffCount > 0) {
                       return false;
                   }
                   diffCount+=1;
                   if(string1.length === string2.length){
                        pointer1--;
                        pointer2--;
                   }else if(string1.length > string2.length) {
                       pointer1--;
                   }
               }
           }
       }
       diffCount = diffCount + (string1.length-1 - pointer1);
       return diffCount > 1;
   }
   //
   // const test1 = oneAway("pale", "ple");
   // const test2 = oneAway("pales", "pale");
   // const test3 = oneAway("pale", "bale");
   // const test4 = oneAway("pale", "bake");
   //
   // console.log(test1, test2, test3, test4);


   /*

   CTCI 1.6: String Compression

   Implement a method to perform basic string compression using the counts of repeated characters.
   For example, the string aabcccccaa would become a2b1c5a2. If the compressed string would be larger then
   the original string return the original string, your method should return the original string. You can assume
   the string has only uppercase and lowercase letters (a-z)

    Test Case 1:
         Input: aabcccccaa
         Output: a2b1c5a2

    Test Case 2:
        Input: aaaaa
        output: a5

   Test Case 3:
        Input: abc
        output: abc

  */

   function stringCompression(string) {
       let result = "";
       let currLetter = string[0];
       let currCount = 0;
       let pointer = 0;
       while(pointer < string.length){
           if(currLetter === string[pointer]) {
               currCount++;
           }else{
               result+=currLetter;
               result+=currCount;
               currLetter= string[pointer];
               currCount =1;
           }
           pointer++;
       }

       result+=currLetter;
       result+=currCount;

       return result.length < string.length ? result: string;
   }
   //
   // const test1 = stringCompression("aabcccccaa");
   // console.log(test1);
   // const test2 = stringCompression("aaaaa");
   // console.log(test2);
   // const test3 = stringCompression("abc");
   // console.log(test3);



   /*
   CTCI 1.9 String Rotation
   Assume you have a method isSubstring which checks if one word is a substring of another.
   Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
   call to isSubstring.

   Test Case 1:
        Input: waterbottle, erbottlewat
        Output: True

    */

    function isSubstring(s1, s2) {
        if(!s1 && !s2) {
            return true;
        }
        if(s1 && !s2 || !s1 && s2 || s1.length !== s2.length){
            return false;
        }
        let s1s1 = s1+s1;
        return s1s1.includes(s2);
    }


    const testCase1 = isSubstring("waterbottle", "erbottlewat");
    console.log(testCase1);





