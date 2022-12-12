import { formatDuration, intervalToDuration } from 'date-fns';

const humanDuration = (time: number) =>
  formatDuration(intervalToDuration({ start: 0, end: time * 1000 }));

export { humanDuration };
export default humanDuration;
