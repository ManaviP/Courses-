const Course = require('../models/Course');

const createCourse = async (req, res) => {
    try {
        const { title, description, category, price } = req.body;
        const newCourse = await Course.create({
            title,
            description,
            category,
            price
        });
        res.status(201).json(newCourse);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'An error occurred while creating the course' });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'An error occurred while fetching courses' });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ error: 'An error occurred while fetching the course' });
    }
};

const updateCourse = async (req, res) => {
    try {
        const { title, description, category, price } = req.body;
        const course = await Course.findByPk(req.params.id);
        
        if (course) {
            course.title = title;
            course.description = description;
            course.category = category;
            course.price = price;
            await course.save();
            res.status(200).json(course);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ error: 'An error occurred while updating the course' });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        
        if (course) {
            await course.destroy();
            res.status(200).json({ message: 'Course deleted successfully' });
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ error: 'An error occurred while deleting the course' });
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};
