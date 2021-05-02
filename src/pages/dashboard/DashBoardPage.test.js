import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import { createMemoryHistory } from 'history'

import DashBoardPage from "./DashBoardPage";

const history = createMemoryHistory();
const queryClient = new QueryClient();

const renderDashBoardPage = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <DashBoardPage />
      </Router>
    </QueryClientProvider>
  );
};

test("renders the dashboard challenge", () => {
  const { getByText } = renderDashBoardPage();
  expect(getByText(/React challenge/i)).toBeInTheDocument();
});

test("renders the user's todo list tab", () => {
  const { getByText } = renderDashBoardPage();
  fireEvent.click(getByText(/todo/i));

  expect(history.location.pathname).toBe('/todos');
});
