import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.Map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} OnToggle={onToggle} />
      ))}
    </>
  );
};

export default TaskList;
