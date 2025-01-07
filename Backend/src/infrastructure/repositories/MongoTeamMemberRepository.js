```javascript
const TeamMember = require('../../domain/entities/TeamMember');
const ITeamMemberRepository = require('../../domain/ports/repositories/ITeamMemberRepository');
const TeamMemberModel = require('../models/TeamMemberModel');

class MongoTeamMemberRepository extends ITeamMemberRepository {
  async findById(id) {
    const member = await TeamMemberModel.findById(id);
    return member ? new TeamMember(member) : null;
  }

  async findAll() {
    const members = await TeamMemberModel.find();
    return members.map(member => new TeamMember(member));
  }

  async create(teamMemberData) {
    const member = new TeamMemberModel(teamMemberData);
    await member.save();
    return new TeamMember(member);
  }

  async update(id, teamMemberData) {
    const member = await TeamMemberModel.findByIdAndUpdate(id, teamMemberData, { new: true });
    return member ? new TeamMember(member) : null;
  }

  async delete(id) {
    await TeamMemberModel.findByIdAndDelete(id);
  }

  async findByDepartment(department) {
    const members = await TeamMemberModel.find({ department });
    return members.map(member => new TeamMember(member));
  }
}

module.exports = MongoTeamMemberRepository;
```