import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsState((oldState) => {
      const newTask = {
        id: Math.random(),
        projectId: oldState.selectedProjectId,
        text,
      }

      return {
        ...oldState,
        tasks: [...oldState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectsState((oldState) => ({
      ...oldState,
      tasks: oldState.tasks.filter(task => task.id !== taskId)
    }))
  }

  function handleStartAddProject() {
    setProjectsState((oldState) => ({
      ...oldState,
      selectedProjectId: null
    }))
  }

  function handleCancel() {
    setProjectsState((oldState) => ({
      ...oldState,
      selectedProjectId: undefined
    }))
  }

  function handleSave(newProject) {
    setProjectsState((oldState) => ({
      ...oldState,
      selectedProjectId: undefined,
      projects: [...oldState.projects, newProject]
    }))
  }

  function handleSelectProject(projectId) {
    setProjectsState((oldState) => ({
      ...oldState,
      selectedProjectId: projectId
    }))
  }

  function handleDeleteProject(projectId) {
    setProjectsState((oldState) => ({
      ...oldState,
      selectedProjectId: undefined,
      projects: oldState.projects.filter((project) => project.id !== projectId)
    }))
  }

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleSave} />
  } else {
    const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId)
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      />
    )
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />

      {content}
    </main>
  );
}

export default App;
