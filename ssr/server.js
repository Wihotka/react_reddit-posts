const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(helmet({
    contentSecurityPolicy: false
}));

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/server.html`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
