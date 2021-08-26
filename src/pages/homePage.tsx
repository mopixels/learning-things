import React from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import Card from "../components/Card";
import { CharacterProps } from "types/types";
import { fetchCharacters } from "utils/api";
import { LoadingMessage } from "components/LoadingMessage";
import { ErrorMessage } from "components/ErrorMessage";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
`;

const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-bottom: 2rem;
`;

const CtaContainer = styled.div`
  display: flex;

  button,
  span {
    margin: 4px;
  }
`;

const HomePage: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isFetched,
    isError,
    isLoading,
  } = useInfiniteQuery("characters", fetchCharacters, {
    getNextPageParam: (lastPage) => lastPage.info.next,
  });

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <LoadingMessage />}
      {isFetched && (
        <Section>
          <CardGrid>
            {data?.pages.map((page) =>
              page.results.map((character: CharacterProps, i: number) => (
                <Card key={character.name + i} character={character} />
              ))
            )}
          </CardGrid>
          <CtaContainer>
            <div>
              <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
              </button>
            </div>
            <div>
              {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
          </CtaContainer>
        </Section>
      )}
    </>
  );
};

export default HomePage;
