const express = require('express');
const app = express();
const index = require('./routes/index');
import Routes from './routes/index'

const PORT = process.env.PORT || 5000;
app.use('/index', index);
Routes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;