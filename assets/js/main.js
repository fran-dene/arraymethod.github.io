const inputTarea = document.querySelector('#inputTarea');
const btnAgregar = document.querySelector('#btnAgregar');
const total = document.querySelector('#total');
const realizadas = document.querySelector('#realizadas');
const id = document.querySelector('#id');
const tareas = [{id:1 , tarea: 'Hacer la cama', status: true},
                {id:2 , tarea: 'Hacer Yoga', status: true},
                {id:3 , tarea: 'Hacer aseo', status: false}];


// Function to add task

const addTarea = () => {
    let htmlListId= '';
    for (let tarea of tareas){
        htmlListId += `
        <tr>
            <td>${tarea.id}</td>
            <td class=${tarea.status == true ? 'done' : ''}>${tarea.tarea}</td>
            <td><input id='checkbox' type='checkbox' ${tarea.status == true ? 'checked' : ''} onclick ='tachar(${tareas.findIndex((index) => index == tarea)})' ></td>
            <td><button class='delet' onclick ='delet(${tareas.findIndex((index) => index == tarea)})'><i class="fas fa-trash-alt"></i></button></td>
        </tr>`;
    }
    id.innerHTML = htmlListId;
    total.innerHTML = tareas.length;
    const tareasRealizadas = tareas.filter( tarea => tarea.status == true );
    realizadas.innerHTML = tareasRealizadas.length;
}

// Function to linecross the task that is done
const tachar = (index) => {
    tareas[index].status = !tareas[index].status;
    addTarea();
};


// Function to delet a task
const delet = (index) => {
    tareas.splice(index,1);
    addTarea();
};

//Actions


// Add initial tasks in the array
addTarea();


// Add new tasks in the array
btnAgregar.addEventListener('click', () => {
    const lenght = tareas.length - 1;
    const idTarea = tareas[lenght]?.id ?? 0;
    const newId = idTarea + 1;
    tareas.push({id: newId, tarea: inputTarea.value, status:false});
    addTarea();
});


