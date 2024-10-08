const express = require('express');
const sequelize = require('./config/config');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/courses', courseRoutes);

const startServer = async () => {
    try {
        await sequelize.sync({ logging: console.log }); 
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};


startServer();
