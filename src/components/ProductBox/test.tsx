import { render, screen } from '@testing-library/react'
import ProductBox from '.'
describe('<ProductBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductBox />)
    expect(screen.getByRole('heading', { name: /ProductBox/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
