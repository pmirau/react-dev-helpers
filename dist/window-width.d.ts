export type WindowWidthProps = {
    breakpoints: [string, string][];
};
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
export default function WindowWidth({ breakpoints }: WindowWidthProps): import("react/jsx-runtime").JSX.Element;
