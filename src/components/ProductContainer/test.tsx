import { render, screen } from '@testing-library/react'
import ProductContainer from '.'
describe('<ProductContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductContainer />)
    expect(screen.getByRole('heading', { name: /ProductContainer/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
