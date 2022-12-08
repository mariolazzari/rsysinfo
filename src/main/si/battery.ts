import si from 'systeminformation';
import { IpcMainEvent } from 'electron';

const onBattery = async (e: IpcMainEvent) => {
  try {
    const data = await si.battery();
    e.reply('battery', data);
  } catch (ex) {
    const error =
      ex instanceof Error ? ex.message : 'Error reading battery info';
    e.reply('battery', error);
  }
};

export default onBattery;
