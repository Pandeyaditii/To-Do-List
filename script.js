const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-Container");

function addTask(){
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // const editiButton = document.createElement('button');
        // editiButton.innerHTML = "EDIT";
        // newli.appendChild(editiButton);
        // editiButton.addEventListener('click,editing');
    }  
    inputBox.value = "";
    saveData();
}

// function editing(litag) {
    // let licontent = litag.queryselector("span");
    // let input = document.createElement("input");
    // input.type = "text";
    // input.value = licontent.textcontent;
    // litag.append(input);
    // input.focus();
    // input.addEventListener("blur", () => {
        // licontent.innerHTML = input.value;
        // input.remove();
    // });
    // }

listcontainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");

}
showTask();
