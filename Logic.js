const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const reglabel = document.getElementById('not-reg');
    
    reglabel.style.display = 'block';

    if (user === 'admin' && pass === '123') {
      reglabel.textContent = "Welcome Admin!";
      reglabel.classList.remove('text-danger');
      reglabel.classList.add('text-success');
      
      setTimeout(() => {
        window.location.href = "./TodoApp.html";
      }, 2000);
    } else {
      reglabel.textContent = "Not registered";
      reglabel.classList.remove('text-success');
      reglabel.classList.add('text-danger');
    }
  });
}


const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');

if (taskList && addBtn && taskInput) {
  addBtn.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName === '') return;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      ${taskName}
      <div>
        <button class="btn btn-success btn-sm me-1 done-btn">&#10003;</button>
        <button class="btn btn-danger btn-sm delete-btn">&#10005;</button>
      </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  });

  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.closest('li').remove();
    }
    if (e.target.classList.contains('done-btn')) {
      e.target.closest('li').classList.toggle('done');
    }
  });
}