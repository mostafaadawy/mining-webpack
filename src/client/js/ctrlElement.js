function ctrlElement(event){
    if(event.target.value.length>0)
    {
        document.getElementById("waiting").style.visibility ='hidden';
    }else{
        document.getElementById("responceDiv").style.visibility = 'hidden';
        document.getElementById("waiting").style.visibility ='visible';
    }
        
}
export { ctrlElement}