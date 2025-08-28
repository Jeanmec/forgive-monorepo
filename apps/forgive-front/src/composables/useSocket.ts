import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function useSocket() {
  const config = useRuntimeConfig();
  const backendUrl = config.public?.publicBackendUrl;

  if (!backendUrl) {
    throw new Error('BACKEND_URL is not defined.');
  }

  if (!socket) {
    socket = io(backendUrl, {
      transports: ['websocket'],
    });
  }

  const on = (event: string, callback: (...args: any[]) => void) => {
    socket?.on(event, callback);
  };

  const off = (event: string, callback?: (...args: any[]) => void) => {
    socket?.off(event, callback);
  };

  const emit = (event: string, data?: any) => {
    socket?.emit(event, data);
  };

  return {
    socket,
    on,
    off,
    emit,
  };
}
