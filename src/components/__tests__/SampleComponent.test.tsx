import { render } from '@testing-library/react'

import SampleComponent from 'components/SampleComponent'

describe('SampleComponent.tsx component', () => {
  const { container } = render(<SampleComponent />)

  test('match to snapshot', () => {
    expect(container).toMatchSnapshot()
  })
})
