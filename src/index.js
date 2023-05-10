const sendButton = document.querySelector('#send')
const taskList = document.querySelector('#taskList')
const tasks = []

sendButton.addEventListener("click", function (e) {
    e.preventDefault()
    const getTasks = document.querySelector('#tasks').value

    const getsTheTasks = () => {
        tasks.push(getTasks)
        return tasks
    }

    const displayTheTasks = () => {
        for (item of getsTheTasks()) {
            console.log(item)
        }
        const div = document.createElement("div")
        div.classList.add("div")

        const description = document.createElement("p")
        //description.contentEditable = false
        description.textContent = item
        description.classList.add("paragraph");

        const div_button = document.createElement("divBtt")
        div_button.classList.add("divBtt")

        const completeTask = document.createElement("input")
        completeTask.type = "button"
        completeTask.value = "Completed"
        completeTask.classList.add("taskCompleted");

        const cancelTask = document.createElement("input")
        cancelTask.type = "button"
        cancelTask.value = "Delete"
        cancelTask.classList.add("cancelTask");

        const editTask = document.createElement("input")
        editTask.type = "button"
        editTask.value = "To edit"
        editTask.classList.add("editTask")

        div.append(description)
        div_button.append(completeTask)
        div_button.append(cancelTask)
        div_button.append(editTask)

        if (description.textContent != '') {
            taskList.append(div)
            taskList.append(div_button)
        };
    }
    displayTheTasks();

    //Criar intereção dos botoes
    const interactiveButtons = () => {
        let taskCompleted = document.querySelectorAll('.taskCompleted');
        let task_P = document.querySelectorAll('.paragraph');
        let cancelTask = document.querySelectorAll('.cancelTask');
        let div = document.querySelectorAll('.div');
        let divBtt = document.querySelectorAll('.divBtt');
        let editTask = document.querySelectorAll('.editTask')


        //Completa a tarefa
        function completarTarefa() {
            for (let i = 0; i < taskCompleted.length; i++) {
                taskCompleted[i].addEventListener("click", function () {
                    //task_P[i].classList.add("pDisable");
                    //console.log(task_P[i].classList)
                    task_P[i].style.backgroundColor = '#75bde0';
                    console.log(taskCompleted[i])
                })
            };
        };
        completarTarefa()

        //Deletar Tarefa
        function deletarTarefa() {
            for (let j = 0; j < cancelTask.length; j++) {
                cancelTask[j].addEventListener("click", function () {
                    div[j].remove()
                    divBtt[j].remove()
                })
            };
        };
        deletarTarefa()

        //Editar Tarefa
        function editarTarefa() {
            for (let c = 0; c < editTask.length; c++) {
                let cont = 1
                editTask[c].addEventListener("click", function () {
                    cont++
                    if (cont % 2 === 0) {
                        task_P[c].contentEditable = true
                        task_P[c].focus()
                        editTask[c].value = 'Confirm'
                    } else {
                        task_P[c].contentEditable = false
                        editTask[c].value = 'To edit'
                        console.log(task_P[c].contentEditable)
                    }
                    console.log(cont)
                })
            }
        }
        editarTarefa()

    }
    interactiveButtons();
})

