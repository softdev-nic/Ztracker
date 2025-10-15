const app = document.body;
const nav = document.createElement('nav');
nav.className = 'navbar';
nav.innerHTML = `<ul><a href="/" class="nav-logo">MyApp</a>`+`<a href="./tasklist.html" class="nav-item">TaskList</a>`

app.appendChild (nav);   