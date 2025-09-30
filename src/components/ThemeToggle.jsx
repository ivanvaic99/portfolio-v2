import React, { useEffect, useState } from 'react';

// A small component to toggle between light and dark themes. It persists
// the preference in localStorage so the choice is remembered across
// page reloads. When toggling, it adds or removes the `dark` class on
// the document's root element, which is how Tailwind activates
// dark-mode styles.
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // On mount, read the saved preference from localStorage and apply it.
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}