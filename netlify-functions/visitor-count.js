// netlify-functions/visitor-count.js
let visitCount = 0;

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    visitCount++;
    return {
      statusCode: 200,
      body: JSON.stringify({ count: visitCount })
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }
};
