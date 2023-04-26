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

        const newTaskCheckbox = document.createElement("input")
        newTaskCheckbox.type = "checkbox"
        newTaskCheckbox.name = "taskCompleted";
        newTaskCheckbox.classList.add("taskCompleted");

        const newParagraph = document.createElement("p")
        newParagraph.textContent = item
        newParagraph.appendChild(newTaskCheckbox)

        return taskList.appendChild(newParagraph)
    }
    displayTheTasks()

    let taskCompleted = document.querySelectorAll('[type="checkbox"]')
    for (let i = 0; i < taskCompleted.length; i++) {
        taskCompleted[i].addEventListener("change", function () {
            if (taskCompleted[i].checked === true) {
                console.log('truee')
            } else {
                console.log('falsee')
            }

        })
    }


})
