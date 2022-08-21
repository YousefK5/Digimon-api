function Digimon(name , level, img){
    this.name=name;
    this.level=level;
    this.img=img;
}

fetch("https://digimon-api.herokuapp.com/api/digimon")
.then((response) => {
    return response.json();
}).then((resp)=> {
    console.log(resp.length);
    addToCard(resp);
})
.catch((err) => {
    console.log(err);
});

let cards=document.createElement("div");
cards.style.cssText="display: flex; justify-content:space-around; flex-wrap:wrap;margin: 20px auto";

function addToCard(digArr) {
    digArr.length=20;
    console.log(digArr);
    digArr.map(element => {
        let card = document.createElement("div");
        card.style.cssText="background-color:#6a6c69;box-shadow:#8e8ea2 10px 12px 8px 3px;border-radius:10px; width:250px ; margin:20px ;height:300px;padding:20px";

        let image= document.createElement("img");
        image.style.cssText="width:100% ; height : 65%;border-radius:10%";
        image.src=element.img;

        let text=document.createElement("div");
        text.style.cssText="font-size:20px;color:white"
        text.innerHTML=`Name : ${element.name} <br> Level : ${element.level}`;

        card.appendChild(image);
        card.appendChild(text);
        cards.appendChild(card);
    });
    // let arrNames= digArr.map((e)=>{
    //     return e.name;
    // });
    // console.log(arrNames.indexOf("Agumon"));
    // console.log(arrNames);
    // console.log(digArr[arrNames.indexOf("Agumon")]);
}

document.getElementsByTagName("main")[0].appendChild(cards);
