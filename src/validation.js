import * as yup from 'yup'
const login = () => {
  return yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
}

const register = () => {
  return yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(8),
    confirmPassword: yup.string().required(),
  })
}

export const validation = { login, register }
