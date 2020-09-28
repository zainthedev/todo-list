import { projectObjectList, createProjects, removeProject } from "./project-object.js";
import { projectList, storeProjects, storeTodos } from "./storage.js";
import { createTodos } from "./todo-object.js"
import { renderToDoObjects } from "./render-todo-objects.js"

//Render a project
const renderProject = (project) => {
    const projectDiv = document.createElement("div");

    projectDiv.setAttribute("class", "project");

    const projectTitle = document.createElement("p");
    projectTitle.setAttribute("class", "projectTitle");
    projectTitle.append(project.title);

    projectDiv.append(projectTitle);
    projectsListContainer.append(projectDiv);

    const projectRemoveBtn = document.createElement("button");
    projectRemoveBtn.setAttribute("class", "projectRemoveBtn");
    projectRemoveBtn.textContent = "X";
    projectRemoveBtn.addEventListener("click", (e) => {
        const pageOverlay = document.createElement("div");
        pageOverlay.setAttribute("id", "pageOverlay");

        pageOverlay.addEventListener("click", (e) => {
            pageOverlay.remove();
        });

        //Project delete confirmation prompt
        const removeProjectCheckContainer = document.createElement("div");
        removeProjectCheckContainer.setAttribute("id", "removeProjectCheckContainer");

        const removeProjectCheckText = document.createElement("p");
        removeProjectCheckText.textContent = "Are you sure you want to remove this project? \n All todo items will be lost."

        const removeProjectCheckYes = document.createElement("button");
        removeProjectCheckYes.setAttribute("class", "removeCheckBtn");
        removeProjectCheckYes.textContent = "Remove";
        removeProjectCheckYes.addEventListener("click", (e) => {
            project.projectTodoList.forEach(i => {
                localStorage.removeItem(project.title + " " + i.title + " todo info");
            });
            localStorage.removeItem(project.title + " project todo list");
            removeProject(project);
            storeProjects.removeProjectFromList(project);
            pageOverlay.remove();
            projectDiv.remove();
            todoContainer.remove();
        });

        const removeProjectCheckNo = document.createElement("button");
        removeProjectCheckNo.setAttribute("class", "removeCheckBtn");
        removeProjectCheckNo.textContent = "Cancel";
        removeProjectCheckNo.addEventListener("click", (e) => {
            pageOverlay.remove();
        });

        removeProjectCheckContainer.append(removeProjectCheckText, removeProjectCheckYes, removeProjectCheckNo);
        pageOverlay.append(removeProjectCheckContainer);
        content.insertAdjacentElement("afterbegin", pageOverlay)
    });

    projectDiv.append(projectRemoveBtn);

    projectDiv.addEventListener("click", (e) => {
        const todoContainer = document.querySelector("#todoContainer");
        if (content.contains(todoContainer)) {
            todoContainer.remove();
        }
        storeTodos.getTodoList();
        createTodos();
        renderToDoObjects(project);
    })
}

//Renders all projects
const renderProjectList = () => {

    projectObjectList.forEach(listItem => {
        renderProject(listItem);
    });
};


const renderProjectCreateBtn = (() => {
    const projectCreateBtnContainer = document.createElement("div");
    projectCreateBtnContainer.setAttribute("id", "projectCreateBtnContainer");

    const projectCreateBtn = document.createElement("button");
    projectCreateBtn.setAttribute("id", "projectCreateBtn");
    projectCreateBtn.textContent = "Create Project";
    projectCreateBtn.addEventListener("click", (e) => {
        projectCreateBtn.remove();
        const createProjectPopup = document.createElement("div");
        createProjectPopup.setAttribute("id", "createProjectPopup");
        projects.insertAdjacentElement("afterbegin", createProjectPopup);

        const projectTitleText = document.createElement("p");
        projectTitleText.setAttribute("id", "projectTitleText")
        projectTitleText.textContent = "Title:"
        createProjectPopup.append(projectTitleText);

        const projectTitleInput = document.createElement("input");
        projectTitleInput.setAttribute("id", "projectTitleInput");
        projectTitleInput.setAttribute("placeholder", "New Project")
        createProjectPopup.append(projectTitleInput);

        const projectExistsError = document.createElement("p");
        projectExistsError.setAttribute("class", "projectExistsError")
        projectExistsError.textContent = "Project already exists!";

        const noNameError = document.createElement("p");
        noNameError.setAttribute("class", "noNameError");
        noNameError.textContent = "Enter a name!";

        const projectSubmitBtn = document.createElement("button");
        projectSubmitBtn.textContent = "Save";
        projectSubmitBtn.setAttribute("class", "btn")
        projectSubmitBtn.addEventListener("click", (e) => {
            if (projectList.includes(projectTitleInput.value)) {

                if (!(createProjectPopup.contains(projectExistsError))) {
                    createProjectPopup.insertAdjacentElement("afterend", projectExistsError);
                    return;
                }
            }

            else if (projectTitleInput.value == "") {
                createProjectPopup.insertAdjacentElement("afterend", noNameError);
                return;
            }

            else if (projectTitleInput.value != "") {
                storeProjects.addProjectToList(projectTitleInput.value);
                createProjects();
                createProjectPopup.remove();
                projectTitleInput.remove();
                projectSubmitBtn.remove();
                projectCreateBtnContainer.append(projectCreateBtn);
                projectsListContainer.innerHTML = "";
                renderProjectList();
            }

        });
        createProjectPopup.append(projectSubmitBtn);
    })

    projectCreateBtnContainer.append(projectCreateBtn);
    projects.insertAdjacentElement("afterbegin", projectCreateBtnContainer);

})();



export { renderProjectList }