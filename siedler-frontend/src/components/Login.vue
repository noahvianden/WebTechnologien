<template>
    <div>
      <input v-model="username" type="text" placeholder="Benutzername" />
      <input v-model="password" type="password" placeholder="Passwort" />
      <button @click="login">Anmelden</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          // Senden Sie die Anmeldeinformationen an den Server
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          });
  
          // Überprüfen Sie die Antwort des Servers
          if (response.ok) {
            // Weiterleitung oder Anzeige einer Erfolgsmeldung
            console.log('Login erfolgreich');
          } else {
            // Anzeige einer Fehlermeldung
            console.error('Anmeldung fehlgeschlagen');
          }
        } catch (error) {
          console.error('Fehler beim Einloggen:', error);
        }
      }
    }
  };
  </script>
  