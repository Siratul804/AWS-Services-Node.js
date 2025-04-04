module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      message: "Bye,from serverless!",
    }),
  };
};
