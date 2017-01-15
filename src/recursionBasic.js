// Count from 0 to num using a for-loop
var countToNum = function (num) {
  for ( var i = 0; i < num + 1; i++) {
    console.log('line 4', i);
  }
};
countToNum(5);


// Count from zero to num using recursion
var countToNumRecursively = function (num, currentNum) {
  if (currentNum === undefined) {
    currentNum = 0;
  }
  if (currentNum === num) {
    return;
  }
  else {
    console.log('19 num: ', currentNum);
    countToNumRecursively(num, currentNum + 1);
  }
};

countToNumRecursively(5);

var countToNumRecurse = function (num) {
  if (num <= 20) {
    console.log (num);
    countToNumRecurse(num + 1);
  } else {
    return num;
  }
};
countToNumRecurse(8);

var countEven = function(num) {
  for (var i = 0; i < num + 1; i++) {
    if (i % 2 === 0) {
      console.log('line 39', i);
    }
  }
};
countEven(20);

var countEvenRecurse = function (num, compareNum) {
  if (compareNum <= num) {
    return;
  } else {
    if (compareNum % 2 === 0) {
      console.log(compareNum);
    }
    countEvenRecurse(num, compareNum + 1);
  }
};
// Count from zero to num by twos with a for-loop

// Count from zero to num by twos with recursion
