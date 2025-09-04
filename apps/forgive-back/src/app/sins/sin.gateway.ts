import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import type { GatewayMetadata } from '@nestjs/websockets/interfaces/gateway-metadata.interface';
import { RateType, Sin } from '@forgive-monorepo/shared/types';
import { SinService } from './sin.service';

const allowedOrigins = process.env.ALLOW_ORIGINS?.split(',');

const gatewayOptions: GatewayMetadata =
  allowedOrigins && allowedOrigins.length > 0
    ? {
        cors: {
          origin: allowedOrigins,
          credentials: true,
        },
      }
    : {};

if (allowedOrigins && allowedOrigins.length > 0) {
  Logger.log(
    `Enabled for origins: ${allowedOrigins.join(', ')}`,
    'WEBSOCKET CORS'
  );
} else {
  Logger.warn(
    'Not configured. The ALLOW_ORIGINS variable is missing or empty in the .env file.',
    'WEBSOCKET CORS'
  );
}

@WebSocketGateway(gatewayOptions)
export class SinGateway {
  constructor(private readonly sinService: SinService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('/sin/rate')
  async handleRate(@MessageBody() data: { id: number; type: RateType }) {
    const updated = await this.sinService.rate(data.id, data.type);
    this.server.emit('/sin/update', updated);
  }

  emitNewSin(sin: Sin) {
    this.server.emit('/sin/new', sin);
  }
}
