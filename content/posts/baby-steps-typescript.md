---
title: "Baby Steps Typescript"
date: 2020-03-16T13:16:04-05:00
draft: false
tags: ["tech", "typescript", "react"]
---

## Intro

[Typescript](https://github.com/microsoft/TypeScript) as the repo and many other people mention _is a superset of JavaScript that compiles to clean JavaScript output._ 

**NOTE** If you are Totally new on Typescript, check out this amazing [Understanding TypeScript’s type notation](https://2ality.com/2018/04/type-notation-typescript.html) blog post

If you are unsure if Typescript is or not a superset and what actually superset and subset means I recommend you to read [this SO](https://stackoverflow.com/questions/29918324/is-typescript-really-a-superset-of-javascript) post

Saying this, let's start writting some JS and then the equivalent in Typescript.

```javascript
// index.ts
const range = (start, end) => {
  let current = start;
  const response = [];

  while (current < end) {
    response.push(current);
    current += 1;
  }

  return response;
};

console.log(range(50, 100)) // Output: [0, 1, 2, 3, 4, 5, 6, 7, ...]

```

This will work, since Typescript runs any javascript program, now let's write this as Typescript code

```typescript
const range = (start: number, end: number): number[] => {
  let current = 0;
  const response = [];

  while (current < start) {
    response.push(current);
    current += 1;
  }

  return response;
};
```

See the difference?

This function can be read as **the range function accepts two parameters, start and end which have a type of number (start: number, end: number) and returns an array of numbers (: number[])**

This is just the surface, what if the first parameter is an object?

Let's see it using the same example

```typescript
interface Props {
  end: number;
  start: number;
}

const range = (props: Props) => {...}
```

Amazing, what if we want to make params optional?

```typescript
interface Props {
  end: number;
  start?: number; // Note the "?" next to the param name
}

const range = (props: Props) => {...}
```

## With React

```typescript
// index.tsx

interface ComponentProps {
  header?: string;
	profileId: string;
}

const Component: React.FC<ComponentProps> = ({ header, profileId }): React.ReactElement => (...)

export default Profile;
```

See that? since `Component` is a function that returns something, you can read this component like:

**the Component function of type React.FC (FuncionComponent) accepts one parameter of type `ComponentProps`(: React.FC<ComponentProps>) that returns a ReactElement (: React.ReactElement)**

That's cool right? as you can start noticing, you are still writting the same Javascript code, but now you are declaring types, in a more readable way (it get's actually readable the more you use it)

**.tsx** Notice the use of `index.tsx` instead of `.ts` and this is because our react components use [JSX](https://es.reactjs.org/docs/introducing-jsx.html), so the compiler will know what to do with `<div>Hello JSX</div>`

See [Typescript + React Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) 

## Get used to Typescript

It might feel weird to get used to Typescript, but trust me, the more you use it the more you start to like it, for me this was a similar change on moving from ES5 => ES6
