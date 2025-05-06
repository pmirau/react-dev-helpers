import { ReactNode } from 'react'

export type DevOnlyProps = {
  isDev?: boolean
  children: ReactNode
  nodeEnvDevString?: string
}

type OptionalNodeProcess =
  | {
      env?: {
        NODE_ENV?: string
      }
    }
  | undefined

/**
 * This component renders its children only when in development mode.
 * You can enable Development mode explicitly by using the `isDev` prop.
 * If you don't provide `isDev`, the component checks `process.env.NODE_ENV`
 * to determine if it is in dev mode.
 */
export default function DevOnly({
  // Will try to use process.env.NODE_ENV if not passed
  isDev,
  children,
  // The value that defined if process.env.NODE_ENV is in dev mode. Only used if isDev is not defined.
  nodeEnvDevString = 'development',
}: DevOnlyProps) {
  let _isDev = isDev

  // Fallback to NODE_ENV if isDev is undefined and process exists
  if (_isDev === undefined && typeof process !== 'undefined') {
    const typedProcess = process as OptionalNodeProcess

    if (typedProcess?.env?.NODE_ENV === nodeEnvDevString) {
      _isDev = true
    }
  }

  if (!_isDev) return null

  return children
}
