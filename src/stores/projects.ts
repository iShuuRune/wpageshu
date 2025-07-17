import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@vueuse/core";

interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

interface Task {
  id: string;
  name: string;
  completedAt?: Date;
}

export const useProjectsStore = defineStore("projects", () => {
  const projects = useLocalStorage<Project[]>("projects", [
    {
      id: "uuid-" + uuidv4(),
      name: "Project 1",
      tasks: [
        { id: "1", name: "Task 1" },
        { id: "2", name: "Task 2" },
      ],
    },
    {
      id: "uuid-" + uuidv4(),
      name: "Project 2",
      tasks: [
        { id: "3", name: "Task 3" },
        { id: "4", name: "Task 4" },
      ],
    },
  ]);

  function addProject(name: string) {
    if (!name) {
      throw new Error("Project name cannot be empty");
    }

    projects.value.push({
      id: "uuid-" + uuidv4(),
      name,
      tasks: [],
    });
  }

  function addTask(projectId: string, taskName: string) {
    if (!taskName.trim()) {
      throw new Error("Task name cannot be empty");
    }
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) {
      throw new Error("Project not found");
    }
    project.tasks.push({
      id: Date.now().toString(),
      name: taskName.trim(),
    });
  }

  function editProjectName(projectId: string, newName: string) {
    if (!newName.trim()) {
      throw new Error("Project name cannot be empty");
    }
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) {
      throw new Error("Project not found");
    }
    project.name = newName.trim();
  }

  function editTaskName(projectId: string, taskId: string, newName: string) {
    if (!newName.trim()) {
      throw new Error("Task name cannot be empty");
    }
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) {
      throw new Error("Project not found");
    }
    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) {
      throw new Error("Task not found");
    }
    task.name = newName.trim();
  }

  function deleteTask(projectId: string, taskId: string) {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) {
      throw new Error("Project not found");
    }
    project.tasks = project.tasks.filter((t) => t.id !== taskId);
  }

  function deleteProject(projectId: string) {
    projects.value = projects.value.filter((p) => p.id !== projectId);
  }

  return { projects, addProject, addTask, editProjectName, editTaskName, deleteTask, deleteProject };
});
