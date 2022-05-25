/*
 * 300337817 Oprah Huang
 * CSIS 3380 Project 2 Add page number button
 */

const arrayList = list; // link to the array from data.js
const firstPage = 1;
let currentPage = 1; // current page of the user visisting
const maxItemPerPage = 10; // the number items of showing the page
const totalPage = Math.ceil(arrayList.length / maxItemPerPage); // count how many pages to display
const li = document.querySelectorAll(".contact-item");
const ul = document.querySelector(".contact-list");

// print the html for the array of the contact item
function displayList(array) {
  const ul = document.querySelector(".contact-list");
  ul.innerHTML += `<li class="contact-item cf" value='${array.id}'>
  <div class="contact-details">
      <img class="avatar" src="${array.avatar}">
      <h3>${array.name}</h3>
      <span class="email">${array.email}</span>
  </div>
  <div class="joined-details">
      <span class="date">${array.date}</span>
  </div>
  </li>`;
}

// remove the value in the page to empty items when user click the page link
function emptyObject() {
  const e = document.getElementsByClassName("contact-item");
  for (let i = 0; i < 11; i++) {
    ul.removeChild(ul.firstChild);
  }
}

// print the page link and item display or hidden
function printPageItem(array, page) {
  // set up the start and last item in the page
  let start = (page - 1) * maxItemPerPage;
  let last = page * maxItemPerPage;
  // loop to check if the number between firstIndex and lastIndex
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < last) {
      displayList(array[i]);
    }
  }
}

// add the page link in the bottom of the page add class active when user visits
function addPageLink() {
  const pageList = document.querySelector(".page-list");
  // create page links for each page
  for (let i = 1; i <= totalPage; i++) {
    // insert the html of the page link in the page
    const html = `<li class='page-item'><a href='#' class='page-link' title='${i}' onClick='emptyObject()'>${i}</a></li>`;
    pageList.insertAdjacentHTML("beforeend", html);
    // add the class 'active when loading first page
    if (i == firstPage) {
      document.querySelectorAll(".page-link")[0].classList.add("active");
    }
  }
}

// the action when user clicks the page links and the page link will change class 'active'
function pageLinkClick(array) {
  // add the page link in the page
  addPageLink();
  // select all of <a> components in the pages
  const selectedLink = document.querySelectorAll("a");
  // loop the array of page links when user clicks
  for (let i = 0; i < selectedLink.length; i++) {
    const aLink = selectedLink[i];
    // the event handler for clicking the page link
    aLink.addEventListener("click", insertActive);
    // function to insert class 'active' when user reviews the page
    function insertActive(event) {
      // to get the event values of the selected link
      const clickValue = event.target.title;
      // loop all of the page links to add class 'active' or remove
      for (let i = 0; i < selectedLink.length; i++) {
        if (selectedLink[i].innerHTML == clickValue) {
          selectedLink[i].classList.add("active");
        } else {
          selectedLink[i].classList.remove("active");
        }
      }
      // display the accurate items in the page when user clicks the page link
      if ((currentPage = firstPage)) {
        printPageItem(arrayList, clickValue);
      } else {
        currentPage = event.target.title;
        printPageItem(arrayList, clickValue);
      }
    }
  }
}

// execute the method of the page link
pageLinkClick(arrayList);
// execute the method of print page items for hidden or display
printPageItem(arrayList, firstPage);
