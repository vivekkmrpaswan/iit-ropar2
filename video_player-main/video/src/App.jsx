import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Assessment from "./components/Assessment";
import NextTaskButton from "./components/NextTaskButton";
import ThemeToggle from "./components/ThemeToggle";
import dummyData from "./data/dummyData.json";

const App = () => {
  const [currentTask, setCurrentTask] = useState(0);

  const handleVideoEnd = () => {
    document.getElementById(`assessment-${currentTask}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleAssessmentComplete = () => {
    document.getElementById(`next-task-${currentTask}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleNextTask = () => {
    if (currentTask < dummyData.length - 1) {
      setCurrentTask(currentTask + 1);
    }
  };

  return (
    <div className="app">
      {dummyData.map((task, index) => (
        <div key={task.id} id={`task-${index}`} className="task-section">
          {index === currentTask && (
            <>
              <ThemeToggle/>
              <VideoPlayer videoUrl={task.videoUrl} onVideoEnd={handleVideoEnd} />
              <div id={`assessment-${index}`}>
                <Assessment
                  assessment={task.assessment}
                  onComplete={handleAssessmentComplete}
                />
              </div>
              <div id={`next-task-${index}`}>
                <NextTaskButton onClick={handleNextTask} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
