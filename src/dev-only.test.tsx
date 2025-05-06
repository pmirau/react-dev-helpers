import { render, screen } from '@testing-library/react'
import { DevOnly } from './'

// Since process.env.NODE_ENV is "test" while running these tests, we have to set nodeEnvDevString="test" to emulate process.env.NODE_ENV being in dev mode.

describe('prop "isDev" is defined', () => {
  test('renders null if "isDev" is not true, even though process.env.NODE_ENV is in dev mode', async () => {
    // ARRANGE
    render(
      <>
        <DevOnly isDev={false}>prop is false</DevOnly>
        <DevOnly isDev={false}>prop is 1</DevOnly>
        <DevOnly isDev={false} nodeEnvDevString="test">
          prop is false and NODE_ENV is in dev mode
        </DevOnly>
      </>,
    )

    // ACT
    // ....

    // ASSERT
    expect(screen.queryByText('prop is false')).toBeNull()
    expect(screen.queryByText('prop is 1')).toBeNull()

    expect(process.env.NODE_ENV).toEqual('test')
    expect(
      screen.queryByText('prop is false and NODE_ENV is in dev mode'),
    ).toBeNull()
  })

  test('renders children if "isDev" is true, even though process.env.NODE_ENV is not dev mode', async () => {
    // ARRANGE
    render(
      <>
        <DevOnly isDev={true}>prop is true</DevOnly>
        <DevOnly isDev={true} nodeEnvDevString="production">
          prop is true and NODE_ENV is not in dev mode
        </DevOnly>
      </>,
    )

    // ACT
    // ....

    // ASSERT
    expect(screen.queryByText('prop is true')).toBeNull()

    expect(process.env.NODE_ENV).toEqual('test')
    expect(
      screen.queryByText('prop is true and NODE_ENV is not in dev mode'),
    ).toBeNull()
  })
})

describe('prop "isDev" is not defined', () => {
  test(`renders children only if process.env.NODE_ENV is in dev mode`, async () => {
    // ARRANGE
    render(
      <>
        <DevOnly nodeEnvDevString="test">NODE_ENV is in dev mode</DevOnly>
        <DevOnly nodeEnvDevString="production">
          NODE_ENV is in not dev mode
        </DevOnly>
      </>,
    )

    // ACT
    // ....

    // ASSERT
    expect(screen.queryByText('NODE_ENV is in dev mode')).not.toBeNull()
    expect(screen.queryByText('NODE_ENV is in not dev mode')).toBeNull()
  })
})
