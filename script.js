
const main = document.querySelector('main');
const sectionImgContainers = document.querySelectorAll('.section-img');
const sidebarTitle = document.querySelector('.sidebar .title');
const sidebarNum = document.querySelector('.sidebar .number');
const titles = document.querySelectorAll('.titles');

sectionImgContainers[0].classList.add('in-view')

main.addEventListener('scroll', () => {
  sectionImgContainers.forEach(toggleDark);
})

function toggleDark(el) {
  const top = el.getBoundingClientRect().top;
  if (top < 650) {
    el.classList.add('in-view');
    // changeSidebar(el);
    return;
  } 
}

function setTime(city) {
  
}

// function changeSidebar(el) {
//   sidebarTitle.innerText = el.querySelector('.title-project').innerText;
//   // sidebarNum
// }

