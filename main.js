var inputAns = document.querySelector('#list-one');
var inputContainer = document.querySelector('.container');
//results = array with different objects
// results[0] = returns first object in array
// results[0].marketname displays miles and name
var marketArray = results.map(function(currentItem, index, array){
  return currentItem.marketname;
})
// var marketArray2 = marketArray.map(function(currentItem, index, array){
//   return currentItem;
// })
//
// var numms = marketArray.filter(function(currentItem, index, array){
//   return currentItem > 0;
// })

var marketWithIn10 = marketArray.filter(function(currentItem, index, array){
  return index < 10;
})

marketWithIn10.forEach(function(currentItem, index, array){
    inputAns.innerHTML += '<li>'+ currentItem + '</li>';
})



// console.log(catData)
//catData.data[0].images.fixed_width_small is what we want to target



cats.data.forEach(function(current, index, array){
  inputContainer.innerHTML += '<img src="' + current.images.fixed_width_small.url + ' ">'
;
})



// console.log(current.images.fixed_width_small.url);
