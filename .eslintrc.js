module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off"
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'alias': [
        ['@', './src'],
        ['stylesheets', './src/assets/stylesheets'],
        ['images', './src/assets/images']
      ]
    }
  }
};
