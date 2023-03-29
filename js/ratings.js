function collect_ratings(){
    const ratings ={
    'count': 0,
    'sum': 0,
    'average': 0
};
let rating=0;

const elements = document.querySelectorAll(".rating");
array.forEach(elements => {
   rating = parseInt( elements.id.replace('star', ''));
    ratings .count += parseInt(elements.value);
    ratings.sum += parseInt(elements.value*rating);

});
if (ratings.count !=0){
ratings.average = (sum/count);
}
return ratings;
};
document.addEventListener('change',()=> {
    const ratings = collect_ratings();
  (document.querySelector("#average").value)= ratings.average.toFixed(2);

})