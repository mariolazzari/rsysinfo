import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { ICpu } from './si/cpu';

export type Channels = 'cpu';
export type ChannelsArgs = ICpu;

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (args: ICpu) => void) {
      const subscription = (_event: IpcRendererEvent, args: ChannelsArgs) =>
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
