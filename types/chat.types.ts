export type ChatMessage = {
  id: string
  text: string
  from: 'user' | 'bot'
  timestamp: string
}
