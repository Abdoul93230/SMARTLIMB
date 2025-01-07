```javascript
class Product {
  constructor({ id, name, description, category, features, specifications, image, status, price, createdAt }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.features = features || [];
    this.specifications = specifications || {};
    this.image = image;
    this.status = status || 'En stock';
    this.price = price || 'Sur devis';
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      category: this.category,
      features: this.features,
      specifications: this.specifications,
      image: this.image,
      status: this.status,
      price: this.price,
      createdAt: this.createdAt
    };
  }
}

module.exports = Product;
```