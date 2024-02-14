import React from 'react'
import './styles/cardUser.css'

const CardUser = ({ user, deleteUser, setEditUser, setIsOpen }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setEditUser(user)
        setIsOpen(true)
    }

  return (
    <article className='user__container'>
        <h3 className='user__name'>{user.first_name} {user.last_name}</h3>
        <ul className='user__list'>
            <li className='user__item'><span>CORREO: </span><span>{user.email}</span></li>
            <li className='user__item'><span>CUMPLEAÑOS: </span><span><ion-icon  name="gift-outline"></ion-icon>{user.birthday}</span></li>
        </ul>
        <div className='user__buttons'>
        <button className='btn__delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
        <button className='btn__update' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CardUser