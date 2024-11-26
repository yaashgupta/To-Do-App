const TaskItem = ({ task, onComplete, onDelete }) => {
    return (
      <div className="task-item">
        <span className={task.completed ? 'completed' : ''}>
          {task.description}
        </span>
        <div>
          <button
            className="done-task"
            onClick={() => onComplete(task.id)}
          >
            {task.completed ? 'Undo' : 'Done'}
          </button>
          <button
            className="delete-task"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TaskItem;
  