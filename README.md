# BNKRLL FRONTEND

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

### **Tools** 🛠️
- React
- Typescript


### **Demo** 🎥
https://github.com/logunlaja26/BNKRLL/assets/26635939/5f785fa6-8487-4426-9437-c17faf7442dc

