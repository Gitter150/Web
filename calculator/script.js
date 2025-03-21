const getI = (s) => document.getElementById(s);
const getC = (s) => document.getElementsByClassName(s);
let result = getI("result");
const buttonIds = Array.from(getC("cards")).map(card => card.id);
let ans;
ans = result.textContent;
buttonIds.forEach((id) => {
    getI(id).addEventListener("click",() => {
        if (id === "=") {
            try {
                result.textContent = eval(result.textContent.replace("Ans",ans));
            }
            catch (e){
                result.textContent = "Invalid Input";
            }
            ans = result.textContent;
        }
        else if(id === "C") {
            if (result.textContent === "0") {
                return;
            }
            if (result.textContent.length == 1) {
                result.textContent = "0";
                return;
            }
            if(result.textContent.slice(-3) === "Ans") {
                result.textContent = result.textContent.slice(0,result.textContent.length-2);
                if (result.textContent === "") {
                    result.textContent = "0";
                    return;
                }
            }
            if((/^\d$/).test(result.textContent.slice(1))) {
                result.textContent = "0";
                return;
            }
            if(result.textContent === "Infinity" || result.textContent === "-Infinity") {
                result.textContent = "0";
                return;
            }
            if(result.textContent === "NaN") {
                result.textContent = "0";
                return;
            }
            if(result.textContent === "Invalid Input") {
                result.textContent = "0";
                return;
            }
            result.textContent = result.textContent.slice(0,-1);
        }
        else if(id === "AC") {
            result.textContent = "0";
            ans = "0";
        }
        else if(id === "Ans") {
            result.textContent = result.textContent === "0"? "Ans":(result.textContent+"Ans");
        }
        else {
            if(getI(id).classList.contains("ops")) {
                result.textContent += id;
                return;
            }
            if (result.textContent === "0") {
                result.textContent = "";
            }
            result.textContent = result.textContent + id;
        }
    });
});









