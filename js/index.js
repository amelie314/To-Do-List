var submitBtn = document.getElementById('submit-btn');
		var reuslt = document.getElementById('reuslt');
		submitBtn.addEventListener('click', function(e) {
			var todoInput = document.getElementById('todo-input').value;
			console.log(todoInput);
			if(todoInput !== '') {
				var todo = document.createElement('LI');
				todo.innerHTML =  todoInput + ' <button>X</button>';
				reuslt.appendChild(todo);
				document.getElementById('todo-input').value = '';
			} else {
				alert('請輸入值');
			}
		});
		reuslt.addEventListener('click', function(e) {
			console.log(e.target.parentNode.parentNode);
			e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		});