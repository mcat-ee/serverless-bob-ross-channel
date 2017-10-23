'use strict';

module.exports.landingPage = (event, context, callback) => {
  let randomIndex = Math.floor(Math.random() * 403);
  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <style>
        .videoPlayer{
          width: 100%;
          height: 100%;
        }
        body {
          margin:0;
          padding:0;
        }
      </style>
      <iframe class="videoPlayer" src="https://www.youtube.com/embed/videoseries?list=PLAEQD0ULngi67rwmhrkNjMZKvyCReqDV4&index=${randomIndex}&autoplay=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  callback(null, response);
};
