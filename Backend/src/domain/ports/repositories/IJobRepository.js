```javascript
class IJobRepository {
  async findById(id) {
    throw new Error('Method not implemented');
  }

  async findAll() {
    throw new Error('Method not implemented');
  }

  async create(job) {
    throw new Error('Method not implemented');
  }

  async update(id, jobData) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }

  async findByDepartment(department) {
    throw new Error('Method not implemented');
  }

  async addApplication(id, application) {
    throw new Error('Method not implemented');
  }
}

module.exports = IJobRepository;
```