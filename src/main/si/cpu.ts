import si from "systeminformation";
import { IpcMainEvent } from "electron";

const onCpu = async (e: IpcMainEvent) => {
  try {
    const res = await Promise.all([
      si.cpu(),
      si.cpuFlags(),
      si.cpuCache(),
      si.cpuCurrentSpeed(),
      si.cpuTemperature(),
    ]);
    const data = {
      cpu: res[0],
      flags: res[1],
      cache: res[2],
      speed: res[3],
      temperatures: res[4],
    };
    e.reply("cpu", data);
  } catch (ex) {
    const error = ex instanceof Error ? ex.message : "Error reading cpu info";
    e.reply("cpu", error);
  }
};

export const onCpuSpeed = async (e: IpcMainEvent) => {
  try {
    const res = await si.cpuCurrentSpeed();
    e.reply("cpuSpeed", res);
  } catch (ex) {
    const error = ex instanceof Error ? ex.message : "Error reading cpu speed";
    e.reply("cpuSpeed", error);
  }
};

export default onCpu;
