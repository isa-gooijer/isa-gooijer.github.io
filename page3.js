/* PAGE 3: QUOTES IN QUARANTINE */

function quotes()
{
    let qumarks='"'; /* quotation marks*/
    let text = document.querySelector("#quote").value; /* get value from form called quote*/
    var temp = document.createElement("P"); /*create a new paragraph*/
    temp.innerHTML = qumarks + text + qumarks;
    document.getElementById("QUO").appendChild(temp); /* add an new item to the div Q, instead of changing an already existing item. */
}
/* https://www.w3schools.com/jsref/met_document_createelement.asp */
