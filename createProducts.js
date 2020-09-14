var fs = require('fs');

fs.readFile('src/data/art.csv', 'utf8', function(err, data) {
  data.split('\n').forEach(p => {
    const product = p.split(',');
    const item = {
      object: 'product',
      active: true,
      attributes: [],
      created: Date.now(),
      description: product[3],
      images: [product[5]],
      livemode: false,
      metadata: { itemId: product[0], medium: product[2] },
      name: product[1],
      statement_descriptor: null,
      type: 'good',
      unit_label: 'print',
      updated: Date.now(),
    };

    console.log(item);
  });
  // const postData = querystring.stringify({
  //   msg: 'Hello World!',
  // });

  // const options = {
  //   hostname: 'www.google.com',
  //   port: 80,
  //   path: '/v1/products',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Content-Length': Buffer.byteLength(postData),
  //   },
  // };

  // const req = http.request(options, res => {
  //   console.log(`STATUS: ${res.statusCode}`);
  //   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  //   res.setEncoding('utf8');
  //   res.on('data', chunk => {
  //     console.log(`BODY: ${chunk}`);
  //   });
  //   res.on('end', () => {
  //     console.log('No more data in response.');
  //   });
  // });

  // req.on('error', e => {
  //   console.error(`problem with request: ${e.message}`);
  // });

  // // Write data to request body
  // req.write(postData);
  // req.end();
});
