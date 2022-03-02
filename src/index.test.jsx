import {render, screen} from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('renders a heading', () => {
        render(<App/>)
        const heading = screen.getByRole('heading', {
            name: /User Database/i,
        })
        expect(heading).toBeInTheDocument()
    })
})