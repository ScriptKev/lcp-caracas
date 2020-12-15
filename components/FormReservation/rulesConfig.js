const rules = {
  name: {
    required: { value: true, message: 'Nombre obligatorio' },
    maxLength: { value: 20, message: 'Maximo 20 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: /^[A-Za-z]+$/i
  },

  lastname: {
    required: { value: true, message: 'Apellido obligatorio' },
    maxLength: { value: 20, message: 'Maximo 20 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: /^[A-Za-z]+$/i
  },

  phone: {
    required: { value: true, message: 'Telefono obligatorio' },
    maxLength: { value: 12, message: 'Maximo 12 numeros' },
    minLength: { value: 10, message: 'Minimo 10 numeros' },
    pattern: { value: /^[0-9]*$/i, message: 'Solo Numeros' }
  },

  email: {
    required: { value: true, message: 'Correo obligatorio' },
    pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Coloque un correo valido' }
  },

  worshipShedule: {
    required: { value: true, message: 'Elija un horario' }
  }
}

export default rules