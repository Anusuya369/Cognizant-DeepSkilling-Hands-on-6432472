import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: 'React JS', duration: '1 month' },
    { id: 2, name: 'Node JS', duration: '1.5 months' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - Duration: {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
