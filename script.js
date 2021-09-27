const btns = document.querySelectorAll(".btn");
const ans = document.querySelector(".answer");

console.log(btns)

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const container = e.currentTarget.parentElement.parentElement;
        const ques = e.currentTarget.parentElement;
        container.classList.toggle("active");
        if(ques.style.fontWeight != "600"){
            ques.style.fontWeight = "600"
            btn.style.transform = "rotate(180deg)"
        }
        else{
            ques.style.fontWeight = "100";
            btn.style.transform = "rotate(0deg)"
        }
    })
})