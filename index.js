const box=document.querySelector(".box");
const question=document.querySelector(".question");
const yes=document.querySelector(".yes");
const no =document.querySelector(".no");
const mark=document.querySelector("#mark");
const boxreact=box.getBoundingClientRect();
const noreact=no.getBoundingClientRect();
yes.addEventListener("click", () => {
    question.innerHTML=("I Love you too! ");
    mark.remove();
});
no.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (boxreact.width - noreact.width))+1;
    const j = Math.floor(Math.random() * (boxreact.height - noreact.height))+1;
    no.style.left=i+'px';
    no.style.top=j+'px';

});