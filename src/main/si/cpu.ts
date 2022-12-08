import si from 'systeminformation';
import { IpcMainEvent } from 'electron';

const onCpu = async (e: IpcMainEvent) => {
  let data;
  let error = '';

  try {
    const res = await Promise.all([si.cpu(), si.cpuTemperature()]);
    data = { cpu: res[0], temperatures: res[1] };
  } catch (ex) {
    error = ex instanceof Error ? ex.message : 'Error reading cpu info';
  } finally {
    e.reply('cpu', { data, error });
  }
};

export default onCpu;
