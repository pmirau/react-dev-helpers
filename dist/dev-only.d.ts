import { ReactNode } from 'react';
export type DevOnlyProps = {
    isDev?: boolean;
    children: ReactNode;
    nodeEnvDevString?: string;
};
/**
 * This component renders its children only when in development mode.
 * You can enable Development mode explicitly by using the `isDev` prop.
 * If you don't provide `isDev`, the component checks `process.env.NODE_ENV`
 * to determine if it is in dev mode.
 */
export default function DevOnly({ isDev, children, nodeEnvDevString, }: DevOnlyProps): ReactNode;
