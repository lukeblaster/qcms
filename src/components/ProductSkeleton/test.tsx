import { render, screen } from '@testing-library/react'
import ProductSkeleton from '.'
describe('<ProductSkeleton />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductSkeleton />)
    expect(screen.getByRole('heading', { name: /ProductSkeleton/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
