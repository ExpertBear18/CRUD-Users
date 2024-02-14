import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'

function App() {

  const [editUser, setEditUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const urlBase = "https://users-crud.academlo.tech/"
  const [ users, getUsers, createUser, deleteUser, updateUser, isLoading ] = useCrud(urlBase)

  useEffect(() => {
    getUsers('/users');
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className='app'>
      <h1>Usuarios</h1>
      <button className='btn__newUser' onClick={handleOpen}>
        <span> + </span> Crear nuevo usuario
      </button>
      <FormUser
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='container__cards'>
        {
          isLoading ?
          <h2>Loading...</h2>
          :
            <>
              {
                users?.map(user => (
                  <CardUser
                  key={user.id}
                  user={user}
                  deleteUser={deleteUser}
                  setEditUser={setEditUser}
                  setIsOpen={setIsOpen}
                  />
                ))
              }
            </>
        }
      </div>
    </div>
  )
}

export default App
