function collect_ratings(){
    let rating=0;
    const rating ={
    count: '0',
    sum: '0',
    average: '0'
}
elements = document.querySelectorAll(".rating");
array.forEach(element => {
   rating = parseInt( element.id.replace('star', ''));
    parseInt(count += element.value);
    parseInt(sum += (element.value*rating));

});
if (count !=0){
average = (sum/count);
}
return rating;
};
document.addEventListener('change',()=> {
    const ratings = collect_ratings();
    ratings.average=(document.querySelector(".average").value).toFixed(2);

})