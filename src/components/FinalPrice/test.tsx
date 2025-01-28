import { render, screen } from '@testing-library/react'
import FinalPrice from '.'
describe('<FinalPrice />', () => {
  it('should render the heading', () => {
    const { container } = render(<FinalPrice />)
    expect(screen.getByRole('heading', { name: /FinalPrice/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
