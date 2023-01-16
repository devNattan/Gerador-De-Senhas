import { nanoid } from "nanoid";
import "./style.css";
import  copy  from "clipboard-copy"
import Swal from 'sweetalert2'

const button = document.querySelector('button');
const generatedKey = document.querySelector('h2');

button.addEventListener('click', () => {
    const randomPassword = nanoid();
    generatedKey.innerHTML = randomPassword
});

generatedKey.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    // alert('Senha copiada!');
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You just copied your password',
        showConfirmButton: false,
        timer: 1800
      })
});