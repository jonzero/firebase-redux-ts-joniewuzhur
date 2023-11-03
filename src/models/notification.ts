import { Timestamp } from 'firebase/firestore';

export interface Notification {
  id?: string;
  title: string;
  description: string;
  type: string;
  createdAt: string | Timestamp;
  subcollections?: any[];
}
