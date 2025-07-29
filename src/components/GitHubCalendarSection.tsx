import React from "react";
import GitHubCalendar from "react-github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
import "../GitHubCalendarStyles.css";

const GitHubCalendarSection: React.FC = () => {
  return (
<section
  id="github"
  className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500 w-full flex justify-center px-4 py-12"
>
      <div
className="w-full max-w-6xl rounded-2xl p-6 shadow-lg bg-white/80 dark:bg-gray-300/20 backdrop-blur-md"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-4xl font-bold gradient-text mb-4">
          My GitHub Contributions
        </h2>

        {/* Wrapper that is scrollable on small devices only */}
        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="Sachin200505"
            blockSize={14}
            blockMargin={4}
            fontSize={16}
            colorScheme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubCalendarSection;
