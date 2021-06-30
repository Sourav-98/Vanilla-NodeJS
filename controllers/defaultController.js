
async function getDefaultPage(req, res){
    console.log('HEllo');
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <h1> Hello Vanilla NodeJS </h1>
    `);
}

async function getPageNotFoundPage(req, res){
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end(`
        <h2>Error 404, Page Not Found!</h2>
    `);
}

module.exports = {
    getDefaultPage,
    getPageNotFoundPage
}
