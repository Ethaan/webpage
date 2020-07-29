---
title: "You Might Not Need Apollo (client)"
date: 2020-07-28T22:11:01-05:00
draft: false
---

_NOTE_ Here we are just talking about Apollo client implementation, not Apollo Server, that could be another topic.

So you will start a new project, and you are luckly enought to choose the stack for this new project, for the frontend you decide to go with _React_, for state managment you think is OK to keep it simple and use hooks, while for sharing state React.Context can do the work, also TailwindCSS seems the option to go, and you will use Parcel, Rollup or Webpack, and now you have to decide about how to get domain data, so you decide to use [Apollo Client](https://www.npmjs.com/package/@apollo/client), since you have an Apollo backend, you might want to take a look into using something like [SWR](https://github.com/vercel/swr) + [Prisma/request](https://github.com/prisma-labs/graphql-request).

The documentation itself for SWR put many examples but i will try to put a minimal example here.

## Configuration.

This is the global configuration to be called on every hook call

```
import useSWR, { SWRConfig } from 'swr'
import { request } from 'graphql-request';

// GRAPHQL_ENDPOINT should be the URL of your backend
const App = () => (
  <SWRConfig
    value={{
      fetcher: (...args: any) =>
        request(GRAPHQL_ENDPOINT, ...args)
          .then((data: any) => data)
          .catch((error: any) => Promise.reject(error)),
    }}
  >
    <Layout>
      <Routes />
    </Layout>
  </SWRConfig>
);
```

## Query Data

This is the easiest way to start getting data, swr will do the work of caching that data peer Key (in this case the query string)

```
const Profile = () => {
  const query = `
   query user {
     _id
     username
   }
  `
  const variables = {}; // just to demostrate how to pass query + variables
  const { data, error } = useSWR([query, variables], options);

  if (error) return <h1>ERROR</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <>
     Hi {data.user.username}
    </>
  )
}
```

## Mutating Data

```
const Profile = () => {
  const query = `
   query user {
     _id
     username
   }
  `

  const mutation = `
   mutation UpdateUsername($username: string) {
     updateUsername(username: $username) {
       ok
       errors {
        message
       }
     }
   }
  `
  const variables = {}; // just to demostrate how to pass query + variables
  const [username, setUsername] = useState('');
  const { data, error, mutate } = useSWR([query, variables], options);

  if (error) return <h1>ERROR</h1>
  if (!data) return <h1>Loading...</h1>

  const handleUpdateUsername = async () => {
    try {
      // Update data on the backend
      await request(GRAPHQL_ENDPOINT [mutation, { username }]);
      // Here we can update the UI "optimisticly" since the above didn't throw an error, we can call mutate and show it on the UI.
      await mutate(query, () => ({
        ...data.user,
        username,
      }), false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
     Hi {data.user.username}
     <input onChange={(e) => setUsername(e.target.value)} />
     <button type="button" onClick={handleUpdateUsername}>Update</button>
    </>
  )
}
```

Easy right? here we are keeping things simple, don't take me wrong Apollo Client is great and you can achive amazing things with this, but as a college who wasn't really familiar with the new technologies on the frontend, after looking into the codebase made one single comment, "why all this complexity for simple HTTP calls" and that whats the "aha" moment for me there, for most of the cases you just want to get some data and you don't even want to update it, you just want to display it, and here SWR with prisma do the job perfectly.

And thats it, on the current company i'm working on, we are doing BIG efforts on migrate from Apollo => SWR + Prisma, we have atleast 50+ components that use the HOC "graphql" and some others that use the "Query" component, some of them are already using SWR other not, but we can already see gains on the UX.
