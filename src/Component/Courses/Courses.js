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
            <h1 className="name">All Courses</h1>
            <div className="row m-5">
                {
                    courses.map(course => <Course key={course.name} course={course}></Course>)
                }
                <button className="btn">Home</button>
            </div>
        </div>
    );
};

export default Courses;