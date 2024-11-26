import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default TaskList;
