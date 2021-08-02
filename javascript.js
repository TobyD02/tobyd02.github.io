function showDiv(title){

    let x = document.getElementsByClassName("container")

    for (let i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }

    let div = document.getElementById(title)
    div.style.display = 'block';    
}