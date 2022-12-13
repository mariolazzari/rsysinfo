import si from 'systeminformation';
import { IpcMainEvent } from 'electron';
import { SystemArgs } from './types';

const onSystem = async (e: IpcMainEvent) => {
  const [system, uuid, bios, baseboard, chassis] = await Promise.all([
    si.system(),
    si.uuid(),
    si.bios(),
    si.baseboard(),
    si.chassis(),
  ]);

  const data: SystemArgs = { system, uuid, bios, baseboard, chassis };

  e.reply('system', { ...data });
};

export default onSystem;
