document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  // const inputTitle = document.querySelector('#title');
  // inputTitle.addEventListener('input', handleInputTitle);

  // const inputAuthor = document.querySelector('#author');
  // inputAuthor.addEventListener('input', handleInputAuthor);

  // const selectCategory = document.querySelector('#category'); 
  // selectCategory.addEventListener('change', handleSelectCategory)

  // const clickCatergory = document.querySelector('option');
  // clickCatergory.addEventListener('click', handleClick);

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  
  // newItem.textContent = handleFormSubmit();

  // input.addEventListener('click', handleButtonClick); 
})

// const handleInputTitle = function(event) {
//   const resultParagraph = document.querySelector('#title');
//   resultParagraph.textContent = `${event.target.value}`;
//   console.log(event.target.value);
// }

// const handleInputAuthor = function(event){
//   const resultParagraph = document.querySelector('#author');
//   // resultParagraph.textContent = `${event.target.value}`;
//   console.log(event.target.value);
// }

// const handleSelectCategory = function(event) {
//   const resultParagrpah = document.querySelector('#category');
//   // resultParagrpah.textContent = `${event.target.value}`;
//   console.log(event.target.value);
// }
// const handleClick = function(){
//   const resultParagraph = document.querySelector('option');
//   // resultParagraph.textContent = `You have selected: {option.value}`
// }

const handleFormSubmit = function(event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#new-item-form')
  // resultParagraph.textContent = 
  console.log(event.target['title'].value);
  console.log(event.target['author'].value);
  console.log(event.target['category'].value);
  const newItem = document.createElement('li');
  newItem.textContent = (event.target['title'].value, event.target['author'].value, event.target['category'].value);
  const list = document.querySelector('#reading-list');
  list.appendChild(newItem)
  resultParagraph.reset() 
}

