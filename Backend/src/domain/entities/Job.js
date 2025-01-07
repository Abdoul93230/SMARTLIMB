```javascript
class Job {
  constructor({ id, title, type, location, department, description, requirements, qualifications, benefits, status, applications, createdAt }) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.location = location;
    this.department = department;
    this.description = description;
    this.requirements = requirements || [];
    this.qualifications = qualifications || [];
    this.benefits = benefits || [];
    this.status = status || 'Actif';
    this.applications = applications || [];
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      type: this.type,
      location: this.location,
      department: this.department,
      description: this.description,
      requirements: this.requirements,
      qualifications: this.qualifications,
      benefits: this.benefits,
      status: this.status,
      applications: this.applications,
      createdAt: this.createdAt
    };
  }
}

module.exports = Job;
```