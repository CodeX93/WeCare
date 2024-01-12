export default class Chat {
  constructor(
    id,
    MessageContent,
    receiverId,
    receiverName,
    senderId,
    senderName,
    Timestamp
  ) {
    this.id = id;
    this.MessageContent = MessageContent;
    this.receiverId = receiverId;
    this.receiverName = receiverName;
    this.senderId = senderId;
    this.senderName = senderName;
    this.Timestamp = Timestamp;
  }
}
