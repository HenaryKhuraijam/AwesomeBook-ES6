import onSubmitHandlerAddForm from './modules/UI.js';
import showTime from './modules/time.js';

showTime();
document.getElementById('add-form').addEventListener('submit', onSubmitHandlerAddForm);
