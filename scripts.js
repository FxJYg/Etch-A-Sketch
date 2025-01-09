const ctn = document.querySelector(".container");

let mode = 0;
let color = '#000000';
const arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let gridSize =16;
const genGrid = (num)=>{
    let child = ctn.lastElementChild;
    while(child){
        ctn.removeChild(child);
        child = ctn.lastElementChild;
    }
    for(let i = 0; i < num; i++){
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = 1;
        for(let j = 0; j < num; j++){
            const col = document.createElement("div");
            col.style.flex = "1 1 0";
//            col.style.border = "solid";
            col.addEventListener("mouseenter",()=>{
                let str = '#';
                for(let k = 0; k < 6; k++){
                    str = str + arr[Math.floor(Math.random()*arr.length)]; 
                }
                console.log(str);
                col.style.backgroundColor = mode == 0 ? 'black': mode == 1 ? color: str;
            });
            row.appendChild(col);   
        }
        ctn.appendChild(row);
    }
};

genGrid(gridSize);

const bk = document.querySelector("#black");
bk.addEventListener("click",()=>{
    mode = 0;
});

const ran = document.querySelector("#color");
ran.addEventListener("click",()=>{
    mode = 1;
    color = '#';
    for(let k = 0; k < 6; k++){
        color = color + arr[Math.floor(Math.random()*arr.length)]; 
    }
});

const rb = document.querySelector("#rainbow");
rb.addEventListener("click",()=>{
    mode = 2;
});

const rt = document.querySelector("#reset")
rt.addEventListener("click",()=>{
    genGrid(gridSize);
});

const size = document.querySelector("#update");
size.addEventListener("click",()=>{
    const input = document.querySelector("input");
    gridSize = input.value;
    genGrid(gridSize);
    input.value = '';
    input.focus();
});