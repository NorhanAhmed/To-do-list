var holdtask=[]
var hold=document.getElementById("hold")
var review=document.getElementById("review")
var progress=document.getElementById("progress")
var done=document.getElementById("done")

//add new element
function todoplay(e){
    var inputValue = document.getElementById("activity").value;
    var li = document.createElement("li");
    li.innerHTML=inputValue
    var savedvalue=inputValue
    //saved to holdtask array
    holdtask.push( savedvalue)
    //clear input value
    document.getElementById("activity").value="      "
    document.getElementById("hold").appendChild(li)
    li.setAttribute("draggable", "true");
   li.setAttribute("id", li.innerHTML);
   li.ondragstart=drag
 //
 const addBtn = document.getElementById('addbtn');
 let id=li.getAttribute("id")
let mytasks = [];
addBtn.addEventListener('click', addTask)

function addTask() {

    let taskVal = inputValue.value;
    saveData(taskVal , `task${id}` , 'in-progress');
}
}
//1 to remove
// function drawElme (val , id , className) {
//     const elem = document.createElement('h2');
//     elem.innerHTML = val;
//     elem.setAttribute('ondragstart', 'dragstart(event)')
//     elem.setAttribute("draggable", "true")
//     elem.setAttribute("id", id)
//     elem.setAttribute("class", className)
//     elem.setAttribute("ondragover", "stopProp(event)")
//     document.getElementById(className).appendChild(elem);
// }
//save sctivity to localstorage
function saveData(task, taskId, stu) {
    console.log(taskId)
    let taskData = {
        data: task,
        id: taskId,
        status: stu
    }
    if (localStorage.getItem('mytasks')) {
        let savedArr = JSON.parse(localStorage.getItem('mytasks'));
        savedArr.push(taskData)
        localStorage.setItem('mytasks', JSON.stringify(savedArr))
    } else {
        mytasks.push(taskData);
        localStorage.setItem('mytasks', JSON.stringify(mytasks))
    }
}
//display the saved data to screen
window.onload = function(e) {
    if (localStorage.getItem('mytasks')) {

        restoreData()
    }
}

function restoreData() {
    let savedArr = JSON.parse(localStorage.getItem('mytasks'));
    // savedArr.map(function (item) {
    //     // drawElme(item.data , item.id , item.status);
    // })
}

////////////////////////
 function drag(e){
  e.dataTransfer.setData("text", e.target.id);

 }
 function dragover(e){
  e.preventDefault();
  e.stopPropagation()

 }
 function drop(e){
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));

 }