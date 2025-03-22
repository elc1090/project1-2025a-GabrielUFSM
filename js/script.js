const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('mobileSidebar');
const overlay = document.getElementById('sidebarOverlay');
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleDarkMode() {
    if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        html.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
darkModeToggle.addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', checkTheme);