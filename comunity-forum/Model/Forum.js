export default class Forum {
  constructor(id, PostTitle, PostContent, AuthorId, Timestamp) {
    this.id = id;
    this.PostTitle = PostTitle;
    this.PostContent = PostContent;
    this.AuthorId = AuthorId;
    this.Timestamp = Timestamp;
  }
}
