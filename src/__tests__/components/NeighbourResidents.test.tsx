import React from "react";
import { render, RenderResult } from "@testing-library/react";
import NeighbourResidents from "../../components/NeighbourResidents";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

let documentBody: RenderResult;

const locationUrl = "https://rickandmortyapi.com/api/location/20";

describe("<NeighbourResidents />", () => {
  beforeEach(() => {
    documentBody = render(
      <QueryClientProvider client={queryClient}>
        <NeighbourResidents locationUrl={locationUrl} />
      </QueryClientProvider>
    );
  });

  it("<NeighbourResidents /> should contain text Rick Sanchez", () => {
    expect(documentBody.getByText("Rick Sanchez")).toBeInTheDocument();
  });
});
