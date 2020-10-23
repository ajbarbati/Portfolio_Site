module.exports = {
    webpack: {
        headers: {
            'X-Content-Options': 'Deny'
        }
    },
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
          ],
        },
      ]
    }
}