import { IpcMainEvent } from 'electron';
import si from 'systeminformation';

export interface ICpu {
  cpu: si.Systeminformation.CpuData;
  temperatures: si.Systeminformation.CpuTemperatureData;
}

const onCpu = async (e: IpcMainEvent) => {
  const cpu = await si.cpu();

  const temps = await si.cpuTemperature();

  e.reply('cpu', { cpu, temps });
};

export default onCpu;
