const app = document.body;
const nav = document.createElement('nav');
nav.className = 'navbar';
nav.innerHTML = `<ul><a href="/" class="nav-logo">MyApp</a>`+`<a href="/about" class="nav-item">About</a>`+`<a href="/contact" class="nav-item">Contact</a><ul/>`;
app.appendChild (nav);   