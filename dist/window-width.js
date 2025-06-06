'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const BASE_CLASSNAME = 'rdhwwBreakpoint';
/**
 * React component to display the current viewport width and breakpoint. This aids in responsive design debugging during development.
 *
 * @param breakpoints - Array of breakpoint name and value pairs. Example:
 * [
 *   ['max-sm', '40rem'],
 *   ['max-md', '48rem'],
 *   ['max-lg', '64rem'],
 *   ['max-xl', '80rem'],
 *   ['max-2xl', '96rem'],
 * ]
 */
export default function WindowWidth({ breakpoints }) {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        applyDynamicBreakpoints(breakpoints);
    }, []);
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
    return (_jsxs("div", { style: {
            position: 'fixed',
            left: 0,
            bottom: 0,
            backgroundColor: 'white',
            padding: '0.25rem',
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: 'black',
        }, children: [_jsxs("div", { style: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.5rem',
                }, children: [_jsx("div", { children: windowWidth }), _jsx("div", { style: { fontSize: '0.6rem', color: 'compl' }, children: breakpoints.map(([name]) => (_jsx("div", { className: `${BASE_CLASSNAME}_name_${name}`, children: name }, name))) })] }), _jsx("div", { style: {
                    marginTop: '0.125rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '0.2rem',
                }, children: breakpoints.map(([name]) => (_jsx("div", { style: {
                        width: '0.4rem',
                        height: '0.4rem',
                        borderRadius: '50%',
                        backgroundColor: '#d3d3d3',
                        position: 'relative',
                    }, children: _jsx("div", { className: `${BASE_CLASSNAME}_name_${name}`, style: {
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            backgroundColor: 'black',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        } }) }, name))) })] }));
}
function applyDynamicBreakpoints(breakpoints) {
    const style = document.createElement('style');
    let styles = '';
    breakpoints.forEach(([name, value], index) => {
        styles += `.${BASE_CLASSNAME}_name_${name} {
      display: none;
    }`;
        const nextBreakpoint = breakpoints[index + 1];
        if (nextBreakpoint) {
            const [, nextValue] = nextBreakpoint;
            styles += `
        @media (min-width: ${value}) and (max-width: ${nextValue}) {
          .${BASE_CLASSNAME}_name_${name} {
            display: block;
          }
        }
      `;
        }
        else {
            styles += `
      @media (min-width: ${value}) {
        .${BASE_CLASSNAME}_name_${name} {
          display: block;
        }
      }
    `;
        }
    });
    style.appendChild(document.createTextNode(styles));
    document.head.appendChild(style);
}
