const sequelize = require('../config/config');
const Course = require('../models/Course');

const seedCourses = async () => {
    try {
        const courses = [
            {
                title: 'Introduction to Programming',
                description: 'Learn frontend and backend programming fromt this course',
                category: 'Web development',
                price: 499.99,
            },
        ];

        await sequelize.sync({ force: true });
        await Course.bulkCreate(courses);

        console.log('Courses seeded successfully!');
    } catch (error) {
        console.error('Error seeding courses:', error);
    } finally {
        await sequelize.close();
    }
};

seedCourses();
