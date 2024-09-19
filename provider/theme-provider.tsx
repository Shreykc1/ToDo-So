// components/ThemeToggle.js
import { IconMoon, IconMoon2, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved user preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            {isDarkMode ? <IconSun/> : <IconMoon className='w-5' />}
        </button>
    );
};

export default ThemeToggle;
