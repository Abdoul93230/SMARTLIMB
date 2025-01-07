```javascript
const BlogPost = require('../../domain/entities/BlogPost');
const IBlogPostRepository = require('../../domain/ports/repositories/IBlogPostRepository');
const BlogPostModel = require('../models/BlogPostModel');

class MongoBlogPostRepository extends IBlogPostRepository {
  async findById(id) {
    const post = await BlogPostModel.findById(id).populate('author');
    return post ? new BlogPost(post) : null;
  }

  async findAll() {
    const posts = await BlogPostModel.find().populate('author');
    return posts.map(post => new BlogPost(post));
  }

  async create(blogPostData) {
    const post = new BlogPostModel(blogPostData);
    await post.save();
    return new BlogPost(post);
  }

  async update(id, blogPostData) {
    const post = await BlogPostModel.findByIdAndUpdate(id, blogPostData, { new: true });
    return post ? new BlogPost(post) : null;
  }

  async delete(id) {
    await BlogPostModel.findByIdAndDelete(id);
  }

  async findByCategory(category) {
    const posts = await BlogPostModel.find({ category }).populate('author');
    return posts.map(post => new BlogPost(post));
  }

  async incrementViews(id) {
    const post = await BlogPostModel.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    );
    return post ? new BlogPost(post) : null;
  }

  async addComment(id, comment) {
    const post = await BlogPostModel.findByIdAndUpdate(
      id,
      { $push: { comments: comment } },
      { new: true }
    );
    return post ? new BlogPost(post) : null;
  }
}

module.exports = MongoBlogPostRepository;
```