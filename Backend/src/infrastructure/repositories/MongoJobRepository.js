```javascript
const Job = require('../../domain/entities/Job');
const IJobRepository = require('../../domain/ports/repositories/IJobRepository');
const JobModel = require('../models/JobModel');

class MongoJobRepository extends IJobRepository {
  async findById(id) {
    const job = await JobModel.findById(id);
    return job ? new Job(job) : null;
  }

  async findAll() {
    const jobs = await JobModel.find();
    return jobs.map(job => new Job(job));
  }

  async create(jobData) {
    const job = new JobModel(jobData);
    await job.save();
    return new Job(job);
  }

  async update(id, jobData) {
    const job = await JobModel.findByIdAndUpdate(id, jobData, { new: true });
    return job ? new Job(job) : null;
  }

  async delete(id) {
    await JobModel.findByIdAndDelete(id);
  }

  async findByDepartment(department) {
    const jobs = await JobModel.find({ department });
    return jobs.map(job => new Job(job));
  }

  async addApplication(id, application) {
    const job = await JobModel.findByIdAndUpdate(
      id,
      { $push: { applications: application } },
      { new: true }
    );
    return job ? new Job(job) : null;
  }
}

module.exports = MongoJobRepository;
```