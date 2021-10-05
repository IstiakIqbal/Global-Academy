import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`./fakeData.JSON`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="name">Our Services</h1>
            <p className="text-white">Total Course {courses.length} </p>
            <div className="row">
                {
                    courses.map(course => <Course key={course.name} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;