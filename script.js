function changeText(){
    const elements = document.getElementsByClassName('text');

    //using loop beacause you're changing the value of more than one element
    //in this case, 2 paragraphs
    for (let i=0; i<elements.length; i++){
        elements[i].innerText = 'Text has been modified';
    }
}