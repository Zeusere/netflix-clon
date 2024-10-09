import React from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: 'Usuario 1', avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
  { id: 2, name: 'Usuario 2', avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
  { id: 3, name: 'Usuario 3', avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
  { id: 4, name: 'Niños', avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
];

const UserSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleUserSelect = (userId: number) => {
    console.log(`Usuario seleccionado: ${userId}`);
    navigate('/browse');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-12 mb-8" />
      <h1 className="text-3xl font-bold mb-8">¿Quién está viendo?</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleUserSelect(user.id)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-md mb-2 transition-all duration-200 ease-in-out transform hover:scale-110 hover:border-2 hover:border-white"
            />
            <span className="text-gray-400 hover:text-white">{user.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-8 px-4 py-2 bg-transparent text-gray-400 border border-gray-400 hover:text-white hover:border-white transition-colors duration-200">
        Administrar perfiles
      </button>
    </div>
  );
};

export default UserSelection;