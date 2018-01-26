const aws = require('aws-sdk');

module.exports = (config) => {
  const sageMakerRuntime = new aws.SageMakerRuntime({
    apiVersion: '2017-05-13',
    region: config.region || 'eu-west-1',
    endpoint: `https://runtime.sagemaker.${config.region || 'eu-west-1'}.amazonaws.com`,
  });
  const params = {
    Body: '',
    EndpointName: config.EndpointName,
    ContentType: 'application/json',
    Accept: 'application/json',
  };

  return (body, cb) => {
    params.Body = JSON.stringify(body);
    sageMakerRuntime.invokeEndpoint(params, (err, data) => {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, JSON.parse(Buffer.from(data.Body).toString('utf8')));
    });
  };
}
