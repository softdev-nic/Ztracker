 
const formcontainer = document.createElement('div');
formcontainer.className = 'form-container';
const form = document.createElement('form');
form.className = 'task-form';

form.innerHTML = `
  <h2>Add Task</h2>
  <label>
    Title:
    <input type="text" id="title" placeholder="Enter title" required />
  </label>
  <label>
    Task:
    <textarea id="task" placeholder="Enter task details" required></textarea>
  </label>
  <button type="submit">Add</button>
`;

formcontainer.appendChild(form);
document.body.appendChild(formcontainer);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const task = document.getElementById('task').value;
  console.log('New Task:', { title, task });
  form.reset(); 
});
