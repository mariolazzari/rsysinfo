import si from 'systeminformation';

export interface IGeneral {
  version: si.Systeminformation.VersionData;
  time: si.Systeminformation.TimeData;
}

export type CpuArgs = {
  cpu: si.Systeminformation.CpuData;
  temperatures: si.Systeminformation.CpuTemperatureData;
};

export type BatteryArgs = si.Systeminformation.BatteryData;
