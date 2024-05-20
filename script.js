let modal_btn=document.querySelector("#add_aply")
let modal=document.querySelector(".modal-bg")
let send=document.querySelector(".send")

modal_btn.addEventListener("click",function(){
    modal.style.display="block"
})

send.addEventListener("click",function(){
    modal.style="none"

})