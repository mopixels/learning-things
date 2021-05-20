import React from "react";
import { render, RenderResult } from "@testing-library/react";
import NeighborResidents from "../../components/NeighborResidents";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

let documentBody: RenderResult;

const locationUrl = "https://rickandmortyapi.com/api/location/20";

describe("<NeighborResidents />", () => {
  beforeEach(() => {
    documentBody = render(
      <QueryClientProvider client={queryClient}>
        <NeighborResidents locationUrl={locationUrl} />
      </QueryClientProvider>
    );
  });

  it("<NeighborResidents /> should contain text Rick Sanchez", () => {
    expect(documentBody.getByText("Rick Sanchez")).toBeInTheDocument();
  });
});
