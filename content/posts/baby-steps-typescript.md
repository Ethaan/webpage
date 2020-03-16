---
title: "Baby Steps Typescript"
date: 2020-03-16T13:16:04-05:00
draft: false
tags: ["tech", "typescript", "react"]
---

## Intro

[Typescript](https://github.com/microsoft/TypeScript) as the repo and many other people mention _is a superset of JavaScript that compiles to clean JavaScript output._ 

**NOTE** If you are Totally new on Typescript, check out this amazing [Understanding TypeScript’s type notation](https://2ality.com/2018/04/type-notation-typescript.html) blog post

If you are unsure if Typescript is or not a superset and what actually superset and subset means i recommend you to read [this SO](https://stackoverflow.com/questions/29918324/is-typescript-really-a-superset-of-javascript) post

Saying this, lets start writting some JS and then the equivalent on Typescript.

```javascript
// index.ts
const range = (start) => {
  let current = 0;
  const response = [];

  while (current < start) {
    response.push(current);
    current += 1;
  }

  return response;
};

console.log(range(100)) // Output: [0, 1, 2, 3, 4, 5, 6, 7, ...]

```



This will work, since Typescript run any javascript program, now lets writte this as Typescript code

```type
const range = (start: number): number[] => {
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

This function be read as **the function range accept one parameter `start` of type `number` (start: number) and return an `array` of `numbers` (: number[])**

This is just the surface, what if the first parameter is an object? like [props in React](https://es.reactjs.org/docs/render-props.html) 

Lets see it

```typescript
interface Props {
  firstParameter: number;
}

const myFunctionWithObjectParams = (props: Props) => {...}
```

Amazing, what if we want to have `optional` params? AKA it can be `null` or `undefined`, easy

```typescript
interface Props {
  firstParameter: number;
  secondParameter?: string; // Note the "?" next to the param name
}

const myFunctionWithObjectParams = (props: Props) => {...}
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

See that? since `Component` is a function that return something, you can read this component like

**the function Component of type React.FC (FuncionComponent) with one parameter of type `ComponentProps`(: React.FC<ComponentProps>) that returns a ReactElement (: React.ReactElement)**

Thats cool right? as you can start noticing, you are still writting the same Javascript code, but now you are declaring types, in a more readable way (it gets actually readable the more you use it)

**.tsx** Notice the use of `index.tsx` instead of `.ts` and this is because our react components use [JSX](https://es.reactjs.org/docs/introducing-jsx.html), so the compiler will know what to do with `<div>Hello JSX</div>`

See [Typescript + React Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) 

## Get used to Typescript

It might feel weird to get used to Typescript, but trust me, the more you use it the more you start to like it, for me this was a similar change on moving from ES5 => ES6
