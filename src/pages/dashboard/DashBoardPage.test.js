import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';

import DashBoardPage from "./DashBoardPage";

const renderDashBoardPage = () => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DashBoardPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

test("renders the dashboard challenge", () => {
  const { getByText } = renderDashBoardPage();
  expect(getByText(/React challenge/i)).toBeInTheDocument();
});

