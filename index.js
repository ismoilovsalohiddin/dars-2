let menuItem1 = document.querySelector(".menu__item1")
let menuItem2 = document.querySelector(".menu__item2")
let menuItem3 = document.querySelector(".menu__item3")
const data = [
    {
      price: "4$",
      type: "Kartoshka",
    },
    {
      price: "5$",
      type: "Tovuq",
    },
    {
      price: "6$",
      type: "Go'sht",
    },
  ]  
const blockedUser1 = prompt("Kimni kirg'izmimiz?");
const blockedUser2 = prompt("Kimni kirg'izmimiz?");
const userName = prompt("Ismingizni kiriting")

if(blockedUser1 == userName){
    menuItem1.textContent = "Gumma yok"
    menuItem2.textContent = "Gumma yok"
    menuItem3.textContent = "Gumma yok"
}else{
    menuItem1.textContent = "price: 4$, type: Kartoshka"
    menuItem2.textContent = "price: 5$, type: Tovuq"
    menuItem3.textContent = "price: 6$, type: Go'sht"
}
if(blockedUser2 == userName){
    menuItem1.textContent = "Gumma yok"
    menuItem2.textContent = "Gumma yok"
    menuItem3.textContent = "Gumma yok"
}else{
    menuItem1.textContent = "price: 4$, type: Kartoshka"
    menuItem2.textContent = "price: 5$, type: Tovuq"
    menuItem3.textContent = "price: 6$, type: Go'sht"
}
