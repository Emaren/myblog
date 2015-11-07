var myFunc1 = function(person) {
  console.log(person.name + " is " + person.age + " years old.");
  }

  myFunc1({name: "Tam", age: 32});



var wordLength = function(sentence) {
  var words = sentence.split(" ");
  var object = {};
  for(var x = 0; x < words.length: x++) {
    object[words[x]] = words[x].length
  }
  return object;
}

var car = function() { drive: "screech"}

function map(f,a) {
  var result = [],
  i;
  for (i = 0; i != a.length; i++)
  result[i] = f(a[i]);
  return result;
}



var car = {
  speed: "medium",
  stop: function(){
    if(typeof(this.speed) === "number") {
      var num = "";
      for(var i = 0; i < this.speed; i++) {
        num += "e";
      }
    }
    if(this.speed === "slow") {
      console.log("sh");
    } else if (this.speed === "medium") {
      console.log("RRch.");
    } else if (this.speed === "fast") {
      console.log("Screeeech!!");
    } else {
      console.log("Yikes, I don't know how fast I'm going!")
    }
  }
}






var myFunc;
if (num == 0){
  myFunc = function(theObject) {
    theObject.make = "Chevrolet"
  }
}


function factorial(n){
  if ((n == 0) || (n == 1))
  return 1;
  else
  return (n * factorial(n - 1));
}

var doubleIt = function (x) {
  return 2 * x;
}


var addOne = function (x) {
  return x + 1;
};

map("1,2,3", addOne)

map([1,2,3], function(x) {
  return x;
})


var map = function(array, func) {
  for(var i = 0; i < array.length; i++) {
    array[i] = func(array[i])
  }
  return array;
}

map([1,2,3], function(x) {
  return x + 1;
});

map(['hello', 'data'], function(word) {
  return word.length;
});
