/*================================
     Current Date part start
==================================*/

let timepass = document.querySelector(".time");


let time = new Date();

  // Get the day, month, and year
  let day = time.toLocaleString('en-us', { weekday: 'short' });
  let month = time.toLocaleString('en-us', { month: 'short' });
  let year = time.getFullYear();

  // Get the day of the month and pad it with a zero if needed
  let dayOfMonth = time.getDate();
  dayOfMonth = (dayOfMonth < 10) ? '0' + dayOfMonth : dayOfMonth;

  // Assemble the formatted date string
  let formattedDate = `${day} ${month} ${dayOfMonth} ${year}`;

  timepass.innerHTML = `${formattedDate}`

/*================================
      Current Date part end
==================================*/

let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let ol = document.querySelector("ol");



let taskList = []

let id;

submit.addEventListener('click',()=>{

   if(input.value !== ''){
    taskList.push(input.value);
    show();
    input.value = "";
   }else{
    alert("Please enter a non-empty task")
   }
   
});




let show = () =>{

    ol.innerHTML = '';
    taskList.map(item => {
    ol.innerHTML +=`<li>
                      <div class="one">
                           <h2>${item}</h2>
                      </div>
                        <div class="two">
                          <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                          <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </li>`;
     });
     tasklistDelete();
     tasklistEdit();
}




let tasklistDelete = () =>{

    let deleteBtn = document.querySelectorAll(".delete");
    let deleteArr =Array.from(deleteBtn);

    deleteArr.map((deleteitem,deleteindex) =>{
      deleteitem.addEventListener('click',()=>{
 
       taskList = taskList.filter((taskItem,taskIndex) => taskIndex != deleteindex);
       show();
        
      });
    });
}


let tasklistEdit = () =>{
  let editBtn = document.querySelectorAll(".edit");
  let editArr =Array.from(editBtn);

  editArr.map((editItem,editIndex)=>{
     editItem.addEventListener('click',()=>{

         id = editIndex ;
         input.value = taskList[editIndex];
        //  This is main part
         input.focus()
         update.style.display = "inline-block"
         submit.style.display = "none"
     })
  });


}


update.addEventListener('click',function(){

  taskList[id] = input.value;
  show();
  update.style.display = "none"
  submit.style.display = "inline-block"
  input.value = ''; 
})