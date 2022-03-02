import {waitFor, getByLabelText, getByTestId, render, screen} from '@testing-library/react'
import Input from './components/Input'
import newUsers from './components/Input'
import axios from 'axios';




it("renders a loading text", () => {
    render(<Input />);
    const Loading = screen.getByText("Loading...");
    expect(Loading).toBeInTheDocument();
    
  });

  describe('newUsers', () => {
    test('fetches the data from the API and correctly renders it', async () => {
        render(<Input />)
        setTimeout(async () => {
            const items = await screen.findByPlaceholderText('Search...');
            expect(items).toHaveLength(0);
          }, 4000)
          //screen.debug()
      })
  })

