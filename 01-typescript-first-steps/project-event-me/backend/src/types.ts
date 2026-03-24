export interface Host {
  id: number;
  username: string;
  name: string;
  email: string;
}
export interface Rsvps {
  event_id: number;
  name: string;
  email: string;
}

export type Id = number;

export interface Event {
  id: Id;
  title: string;
  description: string;
  image_url: string;
  date: Date;
  host_id: number;
  host: Host;
  rsvps: Rsvps[];
}
