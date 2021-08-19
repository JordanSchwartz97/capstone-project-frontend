import React from 'react';
import emailjs from "emailjs-com";


export default function ContactUs() {

    emailjs.sendForm('gmail', 'template_7w4gysj', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

}