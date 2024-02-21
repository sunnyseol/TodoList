let todoArray = JSON.parse(localStorage.getItem('todoArray'));

if(!todoArray) {
  todoArray = [{
    content: '선물 주문하기',
    date: '2024-01-30'
  },{
    content: '주유하기',
    date:'2024-01-30'
  }];
}


/* const todoArray = [{
  content: '선물 주문하기',
  date: '2024-01-30'
},{
  content: '주유하기',
  date:'2024-01-30'
}]; */

/*
1. input value 가져오기
2. DOM 화면에 표기하기
3. 지우기 버튼 만들기 */

displayTodo();


function saveToStorage() {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}


function displayTodo() {
  let todoHtml = '';

  todoArray.forEach((object, index) => {
    const { content, date } = object;
    const html = `
    <span class="grid-aline-centent">${content}</span>
    <div class="grid-aline-date">${date}</div>
    <button class="delete-button">지우기</button>`;

    todoHtml += html;
  });

  document.querySelector('.js-display').innerHTML = todoHtml;


  document.querySelectorAll('.delete-button').forEach((deletButtonObj, i) => {
    deletButtonObj.addEventListener('click', () => {
      todoArray.splice(i, 1);
      displayTodo();
    });
  });


  saveToStorage();

}

document.querySelector('.js-add-button').addEventListener('click', () => { inputElement();
});


document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    inputElement();
  }
});


function inputElement() {

  const inputContent = document.querySelector('.js-input-content');
  const inputContentValue = inputContent.value;

  const inputDate = document.querySelector('.js-input-date');
  const inputDateValue = inputDate.value;

  if(inputContentValue === '') {
    return;
  }

  todoArray.push({
    content : inputContentValue,
    date : inputDateValue
  });

  inputContent.value = '';

  displayTodo();
}







