'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
/**
 * React component to display the current viewport width and breakpoint. This aids in responsive design debugging during development.
 */
export default function WindowWidth({}) {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (_jsxs("div", { className: "fixed right-0 bottom-0 bg-white p-1 font-mono text-xs font-bold", children: [_jsxs("div", { className: "flex flex-row items-center gap-2", children: [_jsx("div", { children: windowWidth }), _jsxs("div", { className: "text-[.6rem] text-compl", children: [_jsx("div", { className: "hidden max-sm:block", children: "none" }), _jsx("div", { className: "hidden sm:max-md:block", children: "sm" }), _jsx("div", { className: "hidden md:max-lg:block", children: "md" }), _jsx("div", { className: "hidden lg:max-xl:block", children: "lg" }), _jsx("div", { className: "hidden xl:max-2xl:block", children: "xl" }), _jsx("div", { className: "hidden 2xl:max-3xl:block", children: "2xl" }), _jsx("div", { className: "hidden 3xl:block", children: "3xl" })] })] }), _jsxs("div", { className: "mt-0.5 flex flex-row justify-between", children: [_jsx("div", { className: "size-1 rounded-full bg-compl-300 max-sm:bg-compl" }), _jsx("div", { className: "size-1 rounded-full bg-compl-300 sm:max-md:bg-compl" }), _jsx("div", { className: "size-1 rounded-full bg-compl-300 md:max-lg:bg-compl" }), _jsx("div", { className: "size-1 rounded-full bg-compl-300 lg:max-xl:bg-compl" }), _jsx("div", { className: "size-1 rounded-full bg-compl-300 xl:max-2xl:bg-compl" }), _jsx("div", { className: "size-1 rounded-full bg-compl-300 2xl:max-3xl:bg-compl" }), _jsx("div", { className: "size-1 rounded-full bg-compl-300 3xl:bg-compl" })] })] }));
}
