/*PAGE 4: SURPISE!*/


let counter = 0;

function like()
{
    counter++;
    document.getElementById('like_counter').innerHTML = counter;
}


function dislike()
{
    document.getElementById("warning").open = true; /*https://www.w3schools.com/jsref/prop_dialog_open.asp */
}
