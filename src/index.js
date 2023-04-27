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

        const completeTask = document.createElement("input")
        completeTask.type = "button"
        completeTask.value = "Completed"
        completeTask.classList.add("taskCompleted");

        const cancelTask = document.createElement("input")
        cancelTask.type = "button"
        cancelTask.value = "X"
        cancelTask.classList.add("cancelTask");
        
        div.append(description)
        div.append(completeTask)
        div.append(cancelTask)
        taskList.append(div)
        
    }
    displayTheTasks()

    let div = document.querySelectorAll('.div')
    let task_P = document.querySelectorAll('.paragraph')
    let taskCompleted = document.querySelectorAll('.taskCompleted')
    let cancelTask = document.querySelectorAll('.cancelTask')
    for (let i = 0; i < taskCompleted.length; i++) {
        taskCompleted[i].addEventListener("click", function () {
            console.log(taskCompleted[i])
            task_P[i].style.backgroundColor = '#85FFAD';
        })
    }
    for (let j = 0; j < cancelTask.length; j++ ){
        cancelTask[j].addEventListener("click", function(){
            div[j].remove()
        })
    }


})
