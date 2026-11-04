// Bootstrap: estilos y JavaScript (incluye Popper) instalados con npm
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'   // versión ESM: usa @popperjs/core, que ya está instalado
import './style.css'

// Validación del formulario de contacto con las clases de Bootstrap
const form = document.querySelector('#formContacto')
const toast = new bootstrap.Toast(document.querySelector('#toastEnviado'))

form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  if (!form.checkValidity()) {
    form.classList.add('was-validated')   // muestra los mensajes de error
    return
  }
  form.classList.remove('was-validated')
  form.reset()
  toast.show()                            // aviso de mensaje enviado
})

// Cierra el menú en celular al elegir una sección
document.querySelectorAll('#navLinks .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = bootstrap.Collapse.getInstance('#navLinks')
    if (menu) menu.hide()
  })
})

// Modo claro / oscuro (se guarda en localStorage)
document.querySelector('#btnTema').addEventListener('click', () => {
  const html = document.documentElement
  const nuevo = html.dataset.theme === 'dark' ? 'light' : 'dark'
  html.dataset.theme = nuevo
  localStorage.setItem('portafolio-tema', nuevo)
})
