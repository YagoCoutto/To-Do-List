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

        const completeTask = document.createElement("input")
        completeTask.type = "button"
        completeTask.value = "Completed"
        completeTask.classList.add("taskCompleted");

        const cancelTask = document.createElement("input")
        cancelTask.type = "button"
        cancelTask.value = "X"

        const newParagraph = document.createElement("p")
        newParagraph.textContent = item
        newParagraph.classList.add("paragraph");
        newParagraph.appendChild(completeTask)

        return taskList.appendChild(newParagraph) // como retornar taskCancel?
    }
    displayTheTasks()

    let taskCompleted = document.querySelectorAll('[type="button"]')
    let task_P = document.querySelectorAll('.paragraph')
    for (let i = 0; i < taskCompleted.length; i++) {
        taskCompleted[i].addEventListener("click", function () {
            console.log(taskCompleted[i])
            task_P[i].style.backgroundColor = '#85FFAD';
            //task_P[i].remove()

        })
    }


})
