Sage Marker invoke
=====

Just some sugar on top of Sage Maker to invoke some endpoints easily.

```sh
npm install --save sagemaker
```

```js
const sagemaker = require('sagemaker')({
  region: 'eu-west-1',
  EndpointName: 'YOUR-MODEL-ENDPOINT-NAME',
});

sagemaker([6.4, 3.2, 4.5, 1.5], (err, data) => {
  console.log(data);
});
```
