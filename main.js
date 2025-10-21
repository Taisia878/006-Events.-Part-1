function func1()
{
    input.value+="1";
}
function func2()
{
    input.value+="2";
}
function func3()
{
    input.value+="3";
}


let input = document.getElementById("input")
let but1 = document.getElementById("b1")
let but2 = document.getElementById("b2")
let but3 = document.getElementById("b3")

but1.addEventListener("click", func1);
but2.addEventListener("click", func2);
but2.addEventListener("click", func3);

