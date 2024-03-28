import { useState, useEffect } from "react";
import { format } from "date-fns-jalali";

// Define type for the formatted time string
type FormattedTime = string;

// Custom hook to get and update formatted time
export function useClock(): FormattedTime {
  const [currentTime, setCurrentTime] = useState<FormattedTime>(
    getFormattedTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return currentTime;
}

function getFormattedTime(): FormattedTime {
  const now = new Date();
  return format(now, "h:mm:ss");
}
