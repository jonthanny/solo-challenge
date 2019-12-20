navButtons = document.querySelector('.nav-buttons');
bodyText = document.querySelectorAll('p');
allCoursesPage = document.querySelector('.all-courses');
collectionsPage = document.querySelector('.collections');
wishlistPage = document.querySelector('.wishlist');
archivedPage = document.querySelector('.archived');

navButtons.addEventListener('click', makeActive);

function makeActive() {
  if (event.target.id == 'all-courses') {
    collectionsPage.classList.remove('active-page')
    wishlistPage.classList.remove('active-page')
    archivedPage.classList.remove('active-page')
    allCoursesPage.classList.add('active-page')
  } else if (event.target.id == 'collections') {
    wishlistPage.classList.remove('active-page')
    allCoursesPage.classList.remove('active-page')
    archivedPage.classList.remove('active-page')
    collectionsPage.classList.add('active-page')
  } else if (event.target.id == 'wishlist') {
    allCoursesPage.classList.remove('active-page')
    archivedPage.classList.remove('active-page')
    collectionsPage.classList.remove('active-page')
    wishlistPage.classList.add('active-page')
  } else if (event.target.id == 'archived') {
    wishlistPage.classList.remove('active-page')
    allCoursesPage.classList.remove('active-page')
    collectionsPage.classList.remove('active-page')
    archivedPage.classList.add('active-page')
  }
}
