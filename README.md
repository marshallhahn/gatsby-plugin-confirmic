# gatsby-plugin-confirmic

A minimal plugin to add Confirmic to your Gatsby site.

### Confirmic Documentation

- [Confirmic Docs](https://docs.confirmic.com/docs)

## How to install

```bash
npm install --save gatsby-plugin-confirmic
```

OR

```bash
yarn add gatsby-plugin-confirmic
```

## How to use

Add the following to your gatsby-config.js file under the plugins section:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-confirmic`,
    options: {
      // replace with your confirmic client id (with prj:)
      client_id: 'YOUR_CONFIRMIC_CLIENT_ID',
    },
  },
];
```

You can find your Confirmic Client ID [here on the Confirmic website](https://app.confirmic.com/dashboard/developers) (it looks like this: "prj:12345678-1234-5678-1234-567891234567").
