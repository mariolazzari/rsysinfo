import si from 'systeminformation';

export interface IData<T> {
  data?: T;
  error?: string;
}

export interface IGeneral {
  version: si.Systeminformation.VersionData;
  time: si.Systeminformation.TimeData;
}

export interface ICpu {
  cpu?: si.Systeminformation.CpuData;
  temperatures?: si.Systeminformation.CpuTemperatureData;
  error: string;
}
