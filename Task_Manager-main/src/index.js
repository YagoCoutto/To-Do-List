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
        description.textContent = item
        description.classList.add("paragraph");

        const divBtt = document.createElement("divBtt")
        divBtt.classList.add("divBtt")

        const completeTask = document.createElement("input")
        completeTask.type = "button"
        completeTask.value = "Completed"
        completeTask.classList.add("taskCompleted");

        const cancelTask = document.createElement("input")
        cancelTask.type = "button"
        cancelTask.value = "Delete"
        cancelTask.classList.add("cancelTask");

        div.append(description)
        divBtt.append(completeTask)
        divBtt.append(cancelTask)
        if (description.textContent != '') {
            taskList.append(div)
            taskList.append(divBtt)
        }

    }
    displayTheTasks()

    
    const interactiveButtons = () => {
        let div = document.querySelectorAll('.div')
        let divBtt = document.querySelectorAll('.divBtt')
        let task_P = document.querySelectorAll('.paragraph')
        let taskCompleted = document.querySelectorAll('.taskCompleted')
        let cancelTask = document.querySelectorAll('.cancelTask')
        for (let i = 0; i < taskCompleted.length; i++) {
            taskCompleted[i].addEventListener("click", function () {
                task_P[i].classList.remove('paragraph') //configurar
                task_P[i].style.backgroundColor = '#85FFAD';
            })
        }
        for (let j = 0; j < cancelTask.length; j++) {
            cancelTask[j].addEventListener("click", function () {
                div[j].remove()
                divBtt[j].remove()
            })
        }
    }
    interactiveButtons()

})
