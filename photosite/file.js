const taskContainer = document.querySelector(".task_container");
const globalStore = [];
console.log(taskContainer);

const loadInitialCardData = () => {
  // localstorage to get tasky card data 
  const getCardData =localStorage.getItem("tasky");
}

const saveChanges = () => {
    const taskData = {
        id:`${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value
    };
   const newCard=`
   
   <div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
   <div class="card">
     <div class="card-header gap-2 d-flex justify-content-end">
       <button class="btn btn-outline-info" name=${taskData.id} onclick="editCard.apply(this, arguments)" >
         <i class="fal fa-pencil" name=${taskData.id}></i>
       </button>
       <button class="btn btn-outline-danger" name=${taskData.id} onclick="deleteCard.apply(this, arguments)">
         <i class="far fa-trash-alt" name=${taskData.id}></i>
       </button>
     </div>
     <div class="card-body">
       <img 
         src=${taskData.imageUrl}
         alt="image"
         class="card-img"
       />
       <h5 class="card-title mt-4">${taskData.taskTitle}</h5>
       <p class="card-text">
         ${taskData.taskDescription}
       </p>
       <span class="badge bg-primary">${taskData.tasktype}</span>
     </div>
     <div class="card-footer">
       <button class="btn btn-outline-primary" name=${taskData.id}>Open Task</button>
     </div>
   </div>
   </div>`;

   taskContainer.insertAdjacentHTML("beforeend",newCard);
 
   globalStore.push(taskData);
   localStorage.setItem("tasky",globalStore);
};