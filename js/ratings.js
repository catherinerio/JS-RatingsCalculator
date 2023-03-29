function collect_ratings(){
    let rating=0;
    const ratings ={
    count: '0',
    sum: '0',
    average: '0'
};
const elements = document.querySelectorAll(".rating");
array.forEach(elements => {
   rating = parseInt( elements.id.replace('star', '')),
    parseInt(count += elements.value),
    parseInt(sum += (elements.value*rating));

});
if (ratings[count] !=0){
ratings.average = (sum/count);
}
return ratings;
};
document.addEventListener('change',()=> {
    const ratings = collect_ratings();
    ratings.average=(document.querySelector(".average").value).toFixed(2);

})