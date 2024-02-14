import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({ createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen }) => {

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(editUser)
  }, [editUser])

  const submit = (data) => {
    if (editUser) {
      updateUser('/users', editUser.id, data);
      setEditUser();
    } else {
      createUser('/users', data)
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
  }

  return (
    <div className={`form__background ${isOpen&&'able'}`}>
      <form className='form__container' onSubmit={handleSubmit(submit)}>
        <div onClick={handleClose} className='form__close'>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <h2 className='form__title'>{editUser ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
        <div className='form__item'>
          <label htmlFor="first_name">Nombre</label>
          <input {...register('first_name')} id="first_name" type="text"
          placeholder='Ingrese su nombre'
          />
        </div>
        <div className='form__item'>
          <label htmlFor="last_name">Apellidos</label>
          <input {...register('last_name')} id="last_name" type="text"
          placeholder='Ingrese su apellido'
          />
        </div>
        <div className='form__item'>
          <label htmlFor="email">Correo</label>
          <input {...register('email')} id="email" type="email"
          placeholder="Ingrese su nombre"
          />
        </div>
        <div className='form__item'>
          <label htmlFor="password">Contraseña</label>
          <input {...register('password')} id="password" type="password"
          placeholder='Ingrese su contraseña'
          />
        </div>
        <div className='form__item'>
          <label htmlFor="birthday">Cumpleaños</label>
          <input {...register('birthday')} id="birthday" type="date"
          />
        </div>
        <button className='form__btn'>{editUser ? 'Guardar cambios' : 'Agregar nuevo usuario'}</button>
      </form>
    </div>
  )
}

export default FormUser