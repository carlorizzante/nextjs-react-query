'use client';

import { useQuery } from "react-query";

export const ReactQueryPage = () => {
  const { isLoading, error, data } = useQuery('repoData', () => {
    return fetch('http://api.github.com/repos/tannerlinsley/react-query')
      .then((res) => res.json())
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  console.log(data);

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}