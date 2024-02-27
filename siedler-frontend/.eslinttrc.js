module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/standard'
    ],
    rules: {
      // Andere Regeln...
      'no-unused-vars': 'off' // Deaktiviere die Regel für die Überprüfung der Verwendung von Variablen
    }
  };
      