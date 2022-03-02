import {findByText, fireEvent, getByPlaceholderText, render, screen, waitFor} from '@testing-library/react'
import Input from './components/Input'


it("renders a loading text", () => {
    render(<Input />);
    const Loading = screen.getByText("Loading...");
    expect(Loading).toBeInTheDocument();
  });


  
test('input appears', async () => {
    await waitFor(() => {
        expect(getByPlaceholderText('Search...')).toBeInTheDocument()
      })
})