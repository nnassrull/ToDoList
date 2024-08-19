const TaskContent = ({ taskContent }) => {
  return (
    <div className="task-content">
      <textarea
        value={taskContent}
        readOnly
        rows={20}
        cols={20}
        style={{
          width: "98%",
          height: "90vh",
          border: "none",
          resize: "none",
        }}
      />
    </div>
  );
};

export default TaskContent;
