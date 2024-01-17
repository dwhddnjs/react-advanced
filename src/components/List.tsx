import useSWR from "swr";
import { getWikiSearchResults } from "../api/wikiApi";
import Item from "./Item";

export const List = ({ searchTerm }: any) => {
  const { isLoading, error, data } = useSWR(
    searchTerm ? searchTerm : null,
    getWikiSearchResults
  );

  let content;
  if (isLoading) content = <p>Loading</p>;
  else if (error) content = <p>{error.message}</p>;
  else if (data?.query?.pages) {
    const results = data?.query?.pages;
    content = (
      <ul>
        {Object.values(results).map((result: any) => (
          <Item ey={result.pageid} result={result} />
        ))}
      </ul>
    );
  }
  return content;
};
