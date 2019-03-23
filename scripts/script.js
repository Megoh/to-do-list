function handleCheckboxClick(e) {
  const checkbox = e.currentTarget;
  const tableRow = checkbox.parentNode.parentNode;
  const taskDiv = tableRow.querySelector(".task");

  if (checkbox.checked) {
    //cross out the task in the row and change its color
    tableRow.style.textDecoration = "line-through";
    tableRow.style.textDecorationColor = "#9eb2c0";
    taskDiv.style.color = "#9eb2c0";
  } else {
    tableRow.style.textDecoration = "none";
    tableRow.style.textDecorationColor = "#2e3641";
    taskDiv.style.color = "#2e3641";
  }
}

function handleTrashBinClick(e) {
  const trashBin = e.currentTarget;
  const tableRow = trashBin.parentNode.parentNode;
  tableRow.parentNode.removeChild(tableRow);
}

function handlePlusClick(e) {
  if (!(document.querySelector("#newTask").innerHTML === "")) {
    const row = document.createElement("div");
    row.className = "row";
    const checkboxDiv = document.createElement("div");
    checkboxDiv.className = "checkboxDiv";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("click", handleCheckboxClick, false);
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML += document.querySelector("#newTask").innerHTML;
    document.querySelector("#newTask").innerHTML = "";
    task.innerHTML += "<i class='fas fa-trash-alt'></i>";
    task
      .querySelector(".fa-trash-alt")
      .addEventListener("click", handleTrashBinClick, false);
    row.appendChild(checkboxDiv);
    row.appendChild(task);
    checkboxDiv.appendChild(checkbox);
    document.querySelector("#tasks").appendChild(row);
  }
}

const checkboxes = document.querySelectorAll("input");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", handleCheckboxClick, false);
}

const trashBins = document.querySelectorAll(".fa-trash-alt");
for (let i = 0; i < trashBins.length; i++) {
  trashBins[i].addEventListener("click", handleTrashBinClick, false);
}

document
  .querySelector("#plusDiv")
  .addEventListener("click", handlePlusClick, false);
