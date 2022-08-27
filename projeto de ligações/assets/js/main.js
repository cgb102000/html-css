import app from "./firabase/app"
console.log(app)
const txtName = document.getElementById ('txtName')
const txtEmail = document.getElementById ('txtEmail')
const btnSubscribe = document.getElementById ('btnSubscribe')



btnSubscribe.addEventListener('click', () =>{

    console.log('Deu certo!.')
    const subscription = {
        name:txtName.value,
        email:txtEmail.value
    }
    console.log(subscription)

})