import { Location } from "../types"

export interface Message {
  id: string,
  author: string,
  timestamp: number,
  content: {
    text?: string,
    attachment?: string,
  },
  location: Location,
  replyTo?: string,
  reactions: {
    [key: string]: number,
  }
}
