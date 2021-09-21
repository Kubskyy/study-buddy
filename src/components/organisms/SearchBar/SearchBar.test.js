import { render, screen, fireEvent } from 'test-utils';
import { setupServer } from 'msw/node';
import { SearchBar } from './SearchBar';
import { handlers } from 'mocks/handlers';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when serach phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);
  });

  // test czy lista znika
});
