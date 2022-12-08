import si from 'systeminformation';
import { IpcMainEvent } from 'electron';

const onCpu = async (e: IpcMainEvent) => {
  try {
    const res = await Promise.all([si.cpu(), si.cpuTemperature()]);
    const data = { cpu: res[0], temperatures: res[1] };
    e.reply('cpu', data);
  } catch (ex) {
    const error = ex instanceof Error ? ex.message : 'Error reading cpu info';
    e.reply('cpu', error);
  }
};

export default onCpu;
