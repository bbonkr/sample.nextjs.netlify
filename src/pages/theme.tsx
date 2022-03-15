import * as React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const ThemePage = () => {
    const { theme, setTheme } = useTheme();

    const handleClickChangeTheme = (t?: string) => () => {
        setTheme(t ? t : theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold underline">Theme</h1>
                <p>Change site theme</p>
            </div>
            <div>
                <fieldset className="px-6 py-3 rounded-lg border-solid border-2 border-green-200 dark:border-green-600">
                    <legend className="text-green-500 dark:text-blue-500 ">
                        Theme
                    </legend>
                    <div className="flex gap-3">
                        <button
                            className="border-0 bg-blue-500 px-3 py-1 hover:bg-blue-300 hover:ring-1 hover:ring-blue-200 active:bg-blue-600 active:ring-blue-100"
                            onClick={handleClickChangeTheme('light')}
                        >
                            Light
                        </button>
                        <button
                            className="border-0 bg-blue-500 px-3 py-1 hover:bg-blue-300 hover:ring-1 hover:ring-blue-200 active:bg-blue-600 active:ring-blue-100"
                            onClick={handleClickChangeTheme('dark')}
                        >
                            Dark
                        </button>
                        <button
                            className="border-0 bg-blue-500 px-3 py-1 hover:bg-blue-300 hover:ring-1 hover:ring-blue-200 active:bg-blue-600 active:ring-blue-100"
                            onClick={handleClickChangeTheme()}
                        >
                            Toggle
                        </button>
                        <button
                            className="border-0 bg-blue-500 px-3 py-1 hover:bg-blue-300 hover:ring-1 hover:ring-blue-200 active:bg-blue-600 active:ring-blue-100"
                            onClick={handleClickChangeTheme('system')}
                        >
                            System
                        </button>
                    </div>
                </fieldset>
            </div>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
    );
};

export default ThemePage;
