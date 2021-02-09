const rules = {
  name: {
    required: { value: true, message: 'Nombre obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre no permitido' },
  },

  email: {
    required: { value: true, message: 'Correo obligatorio' },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Coloque un correo valido',
    },
  },

  prayRequest: {
    required: { value: true, message: 'Petición de oración obligatorio' },
    maxLength: { value: 255, message: 'Maximo 255 letras' },
    minLength: { value: 10, message: 'Minimo 10 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-. ^\r\n]*$/, message: 'Peticion no permitida' },
  },
}

export default rules