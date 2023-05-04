 const taskContainer = document.querySelector(".task__container");
 const globalStore = [];
 console.log (taskContainer);


 const generateNEwCard = (taskData) => {
 return  `
<div class="card col-sm12 col-md-6 col-lg-4 mt-2"  id=${taskData.id}>
<div class="card-header d-flex justify-content-end gap-2">
  <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
<button type="button" class="btn btn-outline-danger" id="removebtn" ${ onclick=" removebtn() " }><i class="fa-solid fa-trash"></i></button>
</div>
<div class="card-body">
  <img src=${taskData.image}   class="card-img-top " alt="...">
  <h5 class="card-title mt-3 fw-bolder text-primary"> ${taskData.taskTitle} </h5>

  <p class="card-text">${taskData.taskDescription}</p>
  <a href="#" class="btn btn-primary">${taskData.taskType}</a>
</div>
</div>`;


 };

 const removebtn = () => {

  console.log ("hello");
  let button = getElementById("removebtn");

// Add a click event listener to the button
button.addEventListener('click', function() {
  taskContainer.parentElement.removeChild(taskContainer);
});
 }



 const  loadInitialCardData = () => {
   //local storage to get tasky card data
   const getCardData = localStorage.getItem("tasky");

   // convert to nomal object
   
    const { cards } = JSON.parse(getCardData);

    //loop over these array of task object to crearte html ,inject it to DOM

    cards.map( (cardObject) => {
   taskContainer.insertAdjacentHTML("beforeend",generateNEwCard(cardObject));
   //update our globalStore
   globalStore.push(cardObject);
   

    })






 };



const saveChanges = () => {
   const taskData = {
    id : `${Date.now()}`,
    image :  document.getElementById("imageurl").value,
    taskTitle : document.getElementById("tasktitle").value,
    taskType : document.getElementById("tasktype").value,
    taskDescription : document.getElementById("taskdescription").value
   }

   console.log (taskData);
   document.querySelectorAll('input').forEach(input => input.value = '');






taskContainer.insertAdjacentHTML("beforeend", generateNEwCard(taskData));

globalStore.push(taskData);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));




};






