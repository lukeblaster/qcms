import { render, screen } from '@testing-library/react'
import RemoveProductButton from '.'
describe('<RemoveProductButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<RemoveProductButton />)
    expect(screen.getByRole('heading', { name: /RemoveProductButton/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
