import { render, screen } from '@testing-library/react'
import SupportedSitesModal from '.'
describe('<SupportedSitesModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<SupportedSitesModal />)
    expect(screen.getByRole('heading', { name: /SupportedSitesModal/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
