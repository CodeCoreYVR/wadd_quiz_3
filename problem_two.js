//- the first is an array
//- the second is a callback that will be called once for every element in the array with three arguments:
  //- the current value of the element
  //- the current index of the element
  //- the array itself

let arr = [1,2,3,4,5,6]


array.find(element => element > 3)

array.find(element => element % 3 === 0)

array.find(element => typeof element === "string")

array.find((element,index, array) => {
  for(let i = 0; i < index; i++) {
      if(element === array[i]){
        return element
      }
    }
  }
)

array.filter((element, index, arr) => index !== arr.indexOf(element))









//find(arr, even)) // -> 2
//find(arr, odd)) // -> 1
//find(arr, above(3))) // -> 4