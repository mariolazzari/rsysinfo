import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
// import { ICpu, IBattery } from './si/types';

export type Channels = 'general' | 'cpu' | 'battery';
// export type ChannelsArgs = ICpu | IBattery;

contextBridge.exposeInMainWorld('api', {
  ipcRenderer: {
    sendMessage(channel: Channels, args?: unknown[]) {
      ipcRenderer.send(channel, args);
    },

    on(channel: Channels, func: (args: unknown) => void) {
      const subscription = (_event: IpcRendererEvent, args: unknown[]) =>
        func(args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },

    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
});
