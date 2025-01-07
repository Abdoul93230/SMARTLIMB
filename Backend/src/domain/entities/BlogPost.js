```javascript
class BlogPost {
  constructor({ id, title, content, author, category, image, status, views, comments, createdAt }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.category = category;
    this.image = image;
    this.status = status || 'Brouillon';
    this.views = views || 0;
    this.comments = comments || [];
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      author: this.author,
      category: this.category,
      image: this.image,
      status: this.status,
      views: this.views,
      comments: this.comments,
      createdAt: this.createdAt
    };
  }
}

module.exports = BlogPost;
```