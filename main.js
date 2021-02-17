var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr= ['images/withNature.jpg', 'images/Meditation.jpg', 'images/Pranayama.png', 'images/workout.jpg', 'images/Blog.jpg'];

var i=0;

//next button
next.addEventListener('click',function(){
    i++;
    if(i>arr.length-1 ){
        i=0;
    }
    document.getElementById('image').src = arr[i];
})

//previous button
previous.addEventListener('click', function(){
    i--;
    if(i< 0){
        i=arr.length-1;
    }
    document.getElementById('image').src = arr[i];
})