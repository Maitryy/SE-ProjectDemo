import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseOffered from './CourseOffered';
import Dropdown  from './Dropdown';
import './Header.css';

function Header() {
    // const[click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

      const [course, setCourse] = useState(false);
      const onmouseEnter = () => {
        if (window.innerWidth < 960) {
          setCourse(false);
        } else {
          setCourse(true);
        }
      };
    
      const onmouseLeave = () => {
        if (window.innerWidth < 960) {
          setCourse(false);
        } else {
          setCourse(false);
        }
      };

    return (
        <nav className = 'header'>
            <div className='header-items'>
              <Link to = '/Home'>
                Home
              </Link>
            </div>

            <div className = 'header-coursesoffered' onMouseEnter={onmouseEnter}
            onMouseLeave={onmouseLeave}>
                Courses Offered
                {course && <CourseOffered />}
            </div>              

            <div className = 'header-search'>
                <input type='text' placeholder='Search Course'/>              
            </div>

            <div className='header-items'>
              <Link to = '/MyCourses'>
                My Courses
              </Link>
            </div>    

            <div className = 'header-dropbox' onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                <i class="fas fa-user-circle"></i>
                {dropdown && <Dropdown />}
            </div>
            
        </nav>
    )
}

export default Header;


