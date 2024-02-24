import { Resources } from './Resources';

export interface Trade {
    id: string;
    initiatorId: string;
    recipientId: string;
    offer: Resources;
    request: Resources;
    status: 'pending' | 'accepted' | 'declined';
    // Weitere handelsbezogene Eigenschaften können hier hinzugefügt werden
  }
  