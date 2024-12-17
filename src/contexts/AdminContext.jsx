import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  // État pour les produits
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "SmartLimb Pro",
      category: "Premium",
      price: "Sur devis",
      status: "En stock",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "SmartLimb Lite",
      category: "Standard",
      price: "Sur devis",
      status: "En stock",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80"
    }
  ]);

  // État pour les articles de blog
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "L'avenir des prothèses myoélectriques en Afrique",
      author: "Ibrahim Mahamadou",
      category: "Innovation Médicale",
      status: "Publié",
      date: "15 Mars 2024",
      views: "1.2k",
      comments: 23,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      content: "Contenu de l'article..."
    },
    {
      id: 2,
      title: "Intelligence Artificielle dans le secteur médical nigérien",
      author: "Aïcha Souleymane",
      category: "Intelligence Artificielle",
      status: "Brouillon",
      date: "10 Mars 2024",
      views: "956",
      comments: 15,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80",
      content: "Contenu de l'article..."
    }
  ]);

  // État pour les offres d'emploi
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Ingénieur en Robotique",
      type: "CDI",
      location: "Niamey, Niger",
      department: "R&D",
      applications: 12,
      status: "Actif",
      posted: "15 Mars 2024",
      description: "Description du poste..."
    },
    {
      id: 2,
      title: "Développeur IA",
      type: "Stage",
      location: "Niamey, Niger",
      department: "Tech",
      applications: 8,
      status: "Actif",
      posted: "10 Mars 2024",
      description: "Description du poste..."
    }
  ]);

  // État pour l'équipe
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Ibrahim Mahamadou",
      role: "Co-fondateur & Directeur Technique",
      department: "Direction",
      email: "ibrahim@smartlimb.com",
      phone: "+227 87 72 75 01",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Aïcha Souleymane",
      role: "Co-fondatrice & Directrice IA",
      department: "R&D",
      email: "aicha@smartlimb.com",
      phone: "+227 87 72 75 02",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ]);

  // État pour les paramètres
  const [settings, setSettings] = useState({
    general: {
      siteName: "SmartLimb",
      description: "Innovation technologique au service de l'humanité",
      language: "Français"
    },
    contact: {
      email: "contact@smartlimb.com",
      phone: "+227 87 72 75 01",
      address: "Niamey, Niger"
    },
    notifications: {
      newApplications: true,
      newComments: false
    }
  });

  // Fonctions pour gérer les produits
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: products.length + 1
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(p => p.id === id ? { ...updatedProduct, id } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Fonctions pour gérer les articles de blog
  const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: blogPosts.length + 1,
      date: new Date().toLocaleDateString('fr-FR', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      views: "0",
      comments: 0
    };
    setBlogPosts([...blogPosts, newPost]);
  };

  const updateBlogPost = (id, updatedPost) => {
    setBlogPosts(blogPosts.map(p => p.id === id ? { ...updatedPost, id } : p));
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter(p => p.id !== id));
  };

  // Fonctions pour gérer les offres d'emploi
  const addJob = (job) => {
    const newJob = {
      ...job,
      id: jobs.length + 1,
      applications: 0,
      posted: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    setJobs([...jobs, newJob]);
  };

  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map(j => j.id === id ? { ...updatedJob, id } : j));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  // Fonctions pour gérer l'équipe
  const addTeamMember = (member) => {
    const newMember = {
      ...member,
      id: team.length + 1
    };
    setTeam([...team, newMember]);
  };

  const updateTeamMember = (id, updatedMember) => {
    setTeam(team.map(m => m.id === id ? { ...updatedMember, id } : m));
  };

  const deleteTeamMember = (id) => {
    setTeam(team.filter(m => m.id !== id));
  };

  // Fonction pour mettre à jour les paramètres
  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <AdminContext.Provider value={{
      products,
      blogPosts,
      jobs,
      team,
      settings,
      addProduct,
      updateProduct,
      deleteProduct,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      addJob,
      updateJob,
      deleteJob,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      updateSettings
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}