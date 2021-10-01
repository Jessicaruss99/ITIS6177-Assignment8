exports.handler = async (event) => {
    // TODO implement
    const msg = "Jessica says " + event.keyword
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
};
