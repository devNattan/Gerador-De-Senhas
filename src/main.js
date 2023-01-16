import { nanoid } from "nanoid";
import "./style.css";

const button = document.querySelector('button');
const generatedKey = document.querySelector('h2');

button.addEventListener('click', () => {
    const randomPassword = nanoid();
    generatedKey.innerHTML = randomPassword
});