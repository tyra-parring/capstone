<template>
  <div id="allContent">
    <div id="mainContent">
      <form id="contactForm" method="post" action="https://formspree.io/f/xrgnrzgz" @submit.prevent="submitForm">
        <h1 class="primaryHeading">Contact Us!</h1>
        <div class="inputPair">
          <label class="inputLabel" for="name">Name</label>
          <input class="inputField" type="text" id="name" v-model="formData.name">
        </div>
        <div class="inputPair">
          <label class="inputLabel" for="email">Email</label>
          <input class="inputField" type="email" id="email" v-model="formData.email">
        </div>
        <div class="inputPair">
          <label class="inputLabel" for="message">Message</label>
          <textarea class="inputField" id="message" rows="5" v-model="formData.message"></textarea>
        </div>
        <div id="buttonCtr">
          <button type="reset">Reset</button>
          <button type="submit">Send</button>
        </div>
        <div class="clear"></div>
      </form>
    </div>
    <div id="secondaryContacts">
      <div id="offline">
        <h2 class="secondaryHeading">Reach Us Offline</h2>
        <h3 class="subHeading">Phone</h3>
        <a class="telephone" href="tel:">(+27) 867-5309</a>
        <h3 class="subHeading">Address</h3>
        <address>
          Milnerton><br/>
          cape Town,  7567
        </address>
      </div>
      <div id="social">
        <h2 class="secondaryHeading">Social Connections</h2>
        <h3 class="subHeading social2">Social</h3>
        <a href="" id="icon" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a href="" target="_blank" id="icon"><i class="fab fa-github"></i>Github</a>
  
      </div>
  
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
      export default {
          components : {
              
          },
          data() {
              return {
                formData: {
               name: '',
               email: '',
               message: ''
        }
              }
          },
          methods: {
      async submitForm() {
        try {
          const response = await axios.post('https://formspree.io/f/xrgnrzgz', this.formData);
      console.log('Form submitted successfully:', response);
      alert('Form submitted successfully!');
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }
    }
          
      }
  </script>
  
  <style scoped>
  body {
      background-color: #363636 !important;
  }
  #allContent {
      max-width: 800px;
      margin: 0 auto;
  }
  
  #mainContent {
    float: left;
    vertical-align: top;
    color: #ffffff;
    padding: 1.5em;
  }
    
  #secondaryContacts {
    float: right;
    vertical-align: top;
    background: #fbb72c ;
    padding: 1.5em;
    margin-top: 6em;
    border-radius: 12px;
    border: 6px solid #fff;
  }
  
  .primaryHeading {
    font-weight: bold;
    font-size: 2.5em;
    margin-bottom: .5em;
  }
  
  .secondaryHeading {
    font-weight: bold;
    font-size: 1.75em;
    margin-bottom: .5em;
  }
  
  .subHeading {
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: .25em;
  }
  
  .inputLabel {
    display: block;
    margin-bottom: .5em;
    font-size: 1.5em;
  }
  
  .inputField {
    border: 3px solid #fff;
    border-radius: 6px;
    font-size: 1.2em;
    background:#fbb72c ;
    margin-bottom: 1em;
    width: 100%;
    
  }
  
  textarea {
    resize: none;
  }
  
  #buttonCtr {
    float: right;
  }
  
  #buttonCtr button {
    font-size: 1.5em;
    padding: .5em;
    background: #fbb72c ;
    color: #fff;
    border-radius: 12px;
    border: none;
  }
  
  button[type="reset"] {
    margin-right: .25em;
  }
  
  #icon {
      text-decoration: none;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  #icon:hover {
      background-color: #363636;
  }
  
  #offline address {
    font-style: normal;
    margin: 0 0 1.25em 1em;
  }
  
  .telephone {
     display: block;
      text-decoration: none;
      color: #184870;
      margin: 0 0 .75em 1em;
  }
  
  .social2 {
    display: none;
  }
  
  .clear {
    float: none;
    clear: both;
  }
  
  @media (max-width:736px) {
   
    
    #secondaryContacts .secondaryHeading {
      display: none;
    }
    
    .social2 {
      display: block;
    }
    
    .telephone, #offline address, .linkedin, .twitter {
      margin-left: 0;
    }
    
  }
  
  @media (max-width:665px) {
   
    #mainContent, #secondaryContacts {
      float: none;
    } 
    
    #secondaryContacts .secondaryHeading {
      display: block;
    }
    
     #secondaryContacts {
      margin: .5em 1.5em 1.5em 1.5em;
    }
    
    .social2 {
      display: none;
    }
    
    .telephone, #offline address, .linkedin, .twitter {
      margin-left: 1em;
    }
    
  }
  
  @media (max-width:367px) {
   
    
    #secondaryContacts .secondaryHeading {
      display: none;
    }
    
    .social2 {
      display: block;
    }
    
    .telephone, #offline address, .linkedin, .twitter {
      margin-left: 0;
    }
    
  }
  
  </style>