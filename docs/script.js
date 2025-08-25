const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
menu.classList.toggle('hidden');
});






window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  
    if (window.scrollY > 10) {
      header.classList.add('bg-indigo-600', 'shadow', 'text-gray-800');
      header.classList.remove('text-white');
    } else {
      header.classList.remove('bg-indigo-600', 'shadow', 'text-gray-800');
      header.classList.add('text-white');
    }
});

