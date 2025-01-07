```javascript
class TeamMember {
  constructor({ id, name, role, department, bio, image, email, phone, social, createdAt }) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.department = department;
    this.bio = bio;
    this.image = image;
    this.email = email;
    this.phone = phone;
    this.social = social || {};
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      department: this.department,
      bio: this.bio,
      image: this.image,
      email: this.email,
      phone: this.phone,
      social: this.social,
      createdAt: this.createdAt
    };
  }
}

module.exports = TeamMember;
```