import { render, screen } from '@testing-library/react'
import ExternalLinkButton from '.'
describe('<ExternalLinkButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExternalLinkButton />)
    expect(screen.getByRole('heading', { name: /ExternalLinkButton/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
