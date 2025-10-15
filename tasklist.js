const data = JSON.parse(localStorage.getItem('tasks'))
console.log(data)
data.map((item)=>{
    const Taskcontainer = document.createElement('div');
    Taskcontainer.className = 'task-container';
    Taskcontainer.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.task}</p>
    <small>${new Date(item.date).toLocaleString()}</small>
    <button class="delete-btn" >Done</button>
    <hr/>
    `
    Taskcontainer.querySelector('.delete-btn').addEventListener('click',()=>{
        if(!confirm("Are you sure task is done?")) return;
        else
        {
                const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        const filteredTasks = tasks.filter(t => t.date !== item.date);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        Taskcontainer.remove();
        }
        
    
    })
    document.body.appendChild(Taskcontainer);
})