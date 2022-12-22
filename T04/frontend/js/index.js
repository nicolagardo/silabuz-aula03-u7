const main = document.getElementById('tarea');
const body = document.querySelector("#detalle")

async function getTask() {
  // id = 1
  const id = new URLSearchParams(window.location.search).get("id");
  const extra = id ? `${id}/`: '';
  console.log(extra);
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/todos/${extra}`);
      const data = await response.json();
      id ? renderTodo(data) : renderTasks(data);
    } catch (error) {
      console.error(error);
    }
  
    
}

function renderTasks(data) {
  main.innerHTML = '';
  data.forEach((task) => {
    let fechaCr = new Date(task.created_at).getTime();
    let fecheHoy = new Date().getTime();
    let diferencia = fecheHoy - fechaCr;
    main.innerHTML += `
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h4>${task.title}</h2>
          <p>
            ${task.body}
          </p>
          <p>
            
            Creado hace: ${Math.round(diferencia/(1000*60*60*24))} días
            Creado hace: ${Math.round(diferencia/(1000*60*60))} horas
          </p>
          
          <a href="./detail.html?id=${task.id}" class="btn btn-primary">Revisar</a>
          </div>
      </div>
      
    </div>`;
    
    
  });
}
function renderTodo(data){
  body.innerHTML = `<div class="col-4">
  <div class="card">
    <div class="card-body">
      <h4>Detalle</h2>
      <p>
        Título: ${data.title}
      </p>
      <p>
        ${data.body}
      </p>
      <p class="card-text"><small class="text-muted">Fecha de creación: ${data.created_at}</small></p>
      <a href="/" class="btn btn-primary">Regresar</a>
      <a href="#" class="btn btn-primary">Editar</a>
      <a href="#" class="btn btn-danger">Eliminar</a>
    </div>
  </div>
</div>`
}

getTask();
