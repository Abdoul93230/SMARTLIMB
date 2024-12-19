import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, Mail, Phone, Filter } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import TeamMemberModal from '../../components/admin/modals/TeamMemberModal';

export default function AdminTeam() {
  const { team, addTeamMember, updateTeamMember, deleteTeamMember } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce membre ?')) {
      deleteTeamMember(id);
    }
  };

  const handleSubmit = (formData) => {
    if (editingMember) {
      updateTeamMember(editingMember.id, formData);
    } else {
      addTeamMember(formData);
    }
    setIsModalOpen(false);
    setEditingMember(null);
  };

  const filteredTeam = team.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Équipe</h1>
          <p className="mt-1 text-gray-500">
            Gérez les membres de l'équipe
          </p>
        </div>
        <button 
          onClick={() => {
            setEditingMember(null);
            setIsModalOpen(true);
          }}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Ajouter un membre
        </button>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un membre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filtres
            </button>
          </div>
        </div>
      </div>

      {/* Liste des membres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-purple-600">{member.role}</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-500">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{member.phone}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => handleEdit(member)}
                  className="text-gray-600 hover:text-purple-600"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleDelete(member.id)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingMember(null);
        }}
        onSubmit={handleSubmit}
        member={editingMember}
      />
    </div>
  );
}