function logBetween(lowNum, highNum) {
    let arr = [];

    for (let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    }

    return arr;
}

function logBetweenStepper(min, max, step) {
    let arr = [];

    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }

    return arr;
}

function printReverse(min, max) {
    let arr = [];

    for (let i = max - 1; i > min; i--) {
        arr.push(i);
    }

    return arr;
}

function fizzBuzz(max) {
    let arr = [];
    for (let i = 3; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            if (!(i % 3 === 0 && i % 5 === 0)){
                arr.push(i);
            }
        }
    }

    return arr;
}

function isPrime(number) {
    if (number === 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function maxValue(array) {
    let init = 0;
    return max = array.reduce((acc, curr) => {
        if (curr > acc) return curr;
        return acc;
    }, init);
}

function myIndexOf(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }

    return -1;
}

function factorArray(array, number) {
    let factors = [];
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] === 0 && number !== array[i]) {
            factors.push(array[i]);
        }
    }

    return factors;
}

function oddRange(end) {
    let arr = [];
    for (let i = 1; i <= end; i++) {
        if (i % 2 !== 0) arr.push(i);
    }

    return arr;
}

function reverseHyphenString(string) {
    let arr = string.split('-');
    let reversed = arr[arr.length - 1];

    for (let i = arr.length - 2; i >= 0; i--) {
        reversed += "-" + arr[i];
    }

    return reversed
}

function intersect(arr1, arr2) {
    let common = [];
    // Loops through every element in arr1
    arr1.forEach(el1 => {
        // Loops through every element in arr2 every element of arr1
        arr2.forEach(el2 => {
            // Adds common elements to `common` array
            if(el2 === el1) {
                common.push(el2);
            }
        })
    });

    // Returns array of common elements
    return common;
}

function mirrorArray(arr) {
    let mirrored = [...arr];
    for (let i = arr.length - 1; i >= 0; i--) {
        mirrored.push(arr[i]);
    }
    return mirrored;
}

function abbreviate(string) {
    // An array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Split the string into an array of words 
    let words = string.split(' ');

    // Map the array of words to an array of modified words
     let modifiedWords = words.map(el => {
        // If the word is 4 characters or shorter, return it as is
        if (el.length <= 4) return el;

        // Split the word into an array of characters
        let characters = el.split('');

        // Filter the array of characters to only include consonants
        let newWord = characters.filter(character => {
            // Return the character if it is not a vowel
            if (!vowels.includes(character)){
                return character;
            }
        });

        // Rejoin the array of consonants into a string and return
        return newWord.join('');
    });

    // Rejoin the array of modified words into a string and return
    return modifiedWords.join(' ');
}

function adults(people) {
    // Filters out any person who is younger than 18 years old
    let arr = people.filter(person => person.age >= 18);

    // Returns array of names of the remaining people
    return arr.map(person => person.name);
}

function countScores(people) {
    let newObj = {};

    people.forEach(person => {
        newObj[person.name] = person.score;
    })

    return newObj;
}

function firstNPrimes(n) {
    let primes = [];

    for (let i = 2; primes.length < n; i++) {
        if (isPrime(i)) primes.push(i);
    }

    return primes;
}

function peakFinder(array) {
    let peakIndicies = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i-1] && array[i] > array[i+1]) peakIndicies.push(i);

        if (i === 0 || i === array.length - 1) {
            if (array[i] > array[i-1] || array[i] > array[i+1]) peakIndicies.push(i);
        }
    }
    return peakIndicies;
}

function divisibleByThreePairSum(array) {
    let divisblePairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        let first = array[i];
        for (let j = i+1; j < array.length; j++) {
            let second = array[j]
            if ((first + second) % 3 === 0) {
                divisblePairs.push([i, j]);
            }
        }
    }
    return divisblePairs;
}

function zipArray(arr1, arr2) {
    let zippedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        zippedArray.push([arr1[i], arr2[i]]);
    }

    return zippedArray;
}

function twoDimensionalTotal(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let subArray = array[i];
        for (let j = 0; j < subArray.length; j++) {
            sum += subArray[j];
        }
    }

    return sum;
}

function countInnerElement(arr) {
    let innerElements = {};

    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];

        for (let j = 0; j < subArray.length; j++) {
            let element = subArray[j];
            if (!innerElements[element]) {
                innerElements[element] = 1;
            } else {
                innerElements[subArray[j]] += 1;
            }
        }
    }

    return innerElements;
}

function twoDiff(array) {
    let diffArray = [];

    for (let i = 0; i < array.length-1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(array[i] - array[j]) === 2) {
                diffArray.push([i, j]);
            }
        }
    }
    return diffArray;
}

function arrayDiff(arr1, arr2) {
    let diff = [];

    arr1.forEach(arr1El => {
        if (!arr2.includes(arr1El)) diff.push(arr1El);
    })

    return diff;
}

function valueCounter(obj, val) {
    let count = 0;

    for (let key in obj) {
        if (obj[key] === val) count++;
    }

    return count;
}

function elementCount(array) {
    let counts = {};

    array.forEach(character => {
        if (!counts[character]) {
            counts[character] = 1;
        } else counts[character] += 1;
    });
    return counts;
}

function nextTwoPrimes(num) {
    let primes = [];

    for (let i = num + 1; primes.length < 2; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

function pairProduct(arr, num) {
    let pairs = [];

    let i = 0;

    while (i < arr.length - 1) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] * arr[j] === num) {
                pairs.push([i, j]);
            }
            j++;
        }
        i++
    }

    return pairs;
}

function twoDimensionalSize(array) {
    let sum = 0;

    array.forEach(subArray => sum += subArray.length);

    return sum;
}

function longWordCount(string) {
    let words = string.split(' ');
    let count = 0;

    words.forEach(word => {
        if (word.length > 7) count++
    });

    return count;
}

function factorial(n) {
    let total = 1;

    for (let i = n; i > 1; i--) {
        total *= i;
    }

    return total;
}

function lcm(num1, num2) {
    let bigger = Math.max(num1, num2);
    let smaller = Math.min(num1, num2);
    let currentMultiple = bigger;

    while(currentMultiple % smaller !== 0) {
        currentMultiple += bigger;
    }
    return currentMultiple;
}

function hipsterfyWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = word.length-1; i >= 0; i--) {
        let character = word[i].toLowerCase();
        if (vowels.includes(character)) {
            return word.slice(0,i) + word.slice(i+1);
        }
    }
}

function hipsterfy(sentence) {
    let newSentence = "";
    let words = sentence.split(' ');

    words.forEach(word => newSentence += " " + hipsterfyWord(word));
    
    return newSentence;
}

function objectToString(count) {
    let string = "";

    for (let letter in count) {
        let times = count[letter];

        for (let i = 0; i < times; i++) {
            string += letter;
        }
    }
    return string;
}

function shortestWord(sentence) {
    let words = sentence.split(' ');

    let initValue = words[0];

    return words.reduce((shortest, current) => {
        if (shortest.length > current.length) {
            shortest = current;
        }

        return shortest;
    }, initValue)
}

function greatestCommonFactor(num1, num2) {
    // Initializes smaller to prevent unneeded iteration
    let smaller = Math.min(num1, num2);
    let greatestCommon = 1;

    for (let i = 2; i <= smaller; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            greatestCommon = i;
        }
    }

    return greatestCommon;
}

function isPassing(assessments) {
    let sum = 0;
    
    assessments.forEach((assessment) => {
        sum += assessment.score;
    });

    return (sum / assessments.length >= 70);
}

function valueConcat(array, obj) {
    let results = [];
    array.forEach((name, i) => {
        if (obj[name]) {
            results.push(array[i] + obj[name]);
        } else results.push(name);
    });

    return results;
}

function threeInARow(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i+1] && arr[i] === arr[i+2]) return true;
    }

    return false;
}

function variableNameify(words) {
    let variable = "";
    words.forEach((word, i) => {
        if (i !== 0) {
            variable += word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            variable += word.toLowerCase();
        }
    })

    return variable;
}

function threeIncreasing(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] + 1 === arr[i+1] && arr[i] + 2 === arr[i+2]) return true;
    }
    
    return false;
}

function reverse2D(array) {
    let string = "";

    for (let i = array.length-1; i >= 0; i--) {
        for (let j = array[i].length-1; j >= 0; j--) {
            string += array[i][j];
        }
    }

    return string;
}

function reverb(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = word.length-1; i >= 0; i--) {
        let character = word[i].toLowerCase();
        if (vowels.includes(character)) {
            return word + word.slice(i);
        }
    }

    return word;
}

function countRepeats(string) {
    let counts = elementCount(string.split(''));
    let repeats = 0;

    for (let char in counts) {
        if (counts[char] > 1) {
            repeats++;
        }
    }

    return repeats;
}

function pairsToString(arr) {
    let string = "";

    arr.forEach(subArray => {
        for (let i = 0; i < subArray[1]; i++) {
            string += subArray[0];
        }
    })

    return string;
}

function countAdjacentSums(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) count++;
    }
    
    return count;
}

function signFlipCount(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < 0 && nums[i + 1] > 0) {
            count++;
        } else if (nums[i] > 0 && nums[i + 1] < 0) {
            count++;
        }
    }

    return count;
}

function powerSequence(base, length) {
    let sequence = [base];
    
    for (let i = 1; i < length; i++) {
        sequence.push(sequence[i - 1] * base);
    }

    return sequence;
}

function collapseString(str) {
    let string = "";
    let prevChar = "";

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (currentChar === prevChar) {
            continue;
        }

        string += currentChar;
        prevChar = currentChar;
    }
    
    return string;
}

function oddWordsOut(sentence) {
    let words = sentence.split(' ');

    let filtered =  words.filter(word => word.length % 2 === 0);

    return filtered.join(' ');
}

function mindPsAndQs(str) {
    let match = "PQ";

    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < str.length; i++) {
        if (match.includes(str[i])) {
            currentStreak++
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else currentStreak = 0;
    }

    return longestStreak;
}

function commonFactors(num1, num2) {
    let factors = [1];

    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function commonPrimeFactors(num1, num2) {
    return commonFactors(num1, num2).filter(el => isPrime(el));
}

function splitHalfArray(array) {
    let split = [];
    let halfway = Math.floor(array.length / 2);

    split.push(array.slice(0, halfway));
    split.push(array.slice(array.length - halfway));

    return split; 
}

function threeUniqueVowels(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let count = {};

    for (let i = 0; i < string.length; i++) {
        if (VOWELS.includes(string[i])) {
            count[string[i]] = true
        }
    }

    return Object.keys(count).length >= 3
}

function vowelShift(sentence) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    let characters = sentence.split('');

    for (let i = 0; i < characters.length; i++) {
        let char = characters[i];
        if (VOWELS.includes(char)) {
            let vowelIndex = VOWELS.indexOf(char);
            if (vowelIndex === VOWELS.length - 1) {
                nextVowel = VOWELS[0];
            } else {
                nextVowel = VOWELS[vowelIndex + 1];
            }

            characters[i] = nextVowel;
        }
    }

    return characters.join('');
}

function hasSymmetry(array) {
    let split = splitHalfArray(array);
    let first = split[0];
    let secondReversed = split[1].reverse();

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== secondReversed[i]) return false;
    }

    return true;
}

function evenSumArray(array) {

    let newArray = [];

    array.forEach(num => {
        let sum = 0;
        for (let i = num; i > 0; i--) {
            if (i % 2 === 0) sum += i;
        }

        newArray.push(sum);
    });

    return newArray;
}

function numsToWords(numString) {
    let numbers = ['Zero', 'One', 'Two', 'Three',
                   'Four', 'Five', 'Six', 'Seven',
                   'Eight', 'Nine'];
    let words = "";

    for (let char of numString) {
        words += numbers[Number(char)];
    }

    return words;
}

function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for (let char of str) {
        if (char === '.') dotCount++;
        else if (char === '-') dashCount++;
    }

    return dotCount > dashCount;
}
