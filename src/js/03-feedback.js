import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');



form.addEventListener('input', throttle(inputText, 500));

function inputText(){
    const inputedText ={
        email: email.value,
        message: message.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(inputedText));
}

if (localStorage.length !== 0){
    email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}
 form.addEventListener('submit', pressSubmit);
 
 function pressSubmit(e){
    e.preventDefault();
        const {
            elements: { email, message }
          } = e.currentTarget;
    
          if (email.value === "" || message.value === "") {
            return;
          }
          
          const dataSent = { email: email.value, message: message.value };
          console.log(dataSent);
          
          e.currentTarget.reset();
          localStorage.removeItem('feedback-form-state');
        }


