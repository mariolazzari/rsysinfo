import { formatDuration, intervalToDuration } from "date-fns";

export const humanDuration = (time: number) => {
  const duration = intervalToDuration({ start: 0, end: time * 1000 });
  const formatted = formatDuration(duration);

  return formatted;
};

export const formatDate = (date: Date): string => {
  const dayStr = date.toLocaleDateString();
  const timeStr = date.toLocaleTimeString();

  return `${dayStr} ${timeStr}`;
};
