import si from 'systeminformation';
import { IpcMainEvent } from 'electron';
import { GeneralArgs } from './types';

const onGeneral = async (e: IpcMainEvent) => {
  const [version, time] = await Promise.all([si.versions(), si.time()]);

  const data: GeneralArgs = { version, time };

  e.reply('general', { ...data });
};

export default onGeneral;
