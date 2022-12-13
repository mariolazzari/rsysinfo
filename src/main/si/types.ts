import si from 'systeminformation';

export interface GeneralArgs {
  version: si.Systeminformation.VersionData;
  time: si.Systeminformation.TimeData;
}

export interface SystemArgs {
  system: si.Systeminformation.SystemData;
  uuid: si.Systeminformation.UuidData;
  bios: si.Systeminformation.BiosData;
  baseboard: si.Systeminformation.BaseboardData;
  chassis: si.Systeminformation.ChassisData;
}

export type CpuArgs = {
  cpu: si.Systeminformation.CpuData;
  temperatures: si.Systeminformation.CpuTemperatureData;
};

export type BatteryArgs = si.Systeminformation.BatteryData;
