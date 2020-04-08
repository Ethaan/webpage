---
title: "Tuples for Fun"
date: 2020-04-01T18:18:03-05:00
draft: false
---

As I have already mentioned on my previous posts, Python Javascript(ts) and Swift are some of my favorite languages out there, I really enjoy writting software with them, and this past days I got into how tuples work in these 3 languages.

### Tuples

So what is a tuple? there might be many different ways to describe a Tuple Data type, but the easiest one I can think of right now is like.

*A tuple is a data structure that is immutable and has its elements in an ordered sequence"

Pretty simple right? is something similar to an array, but as mentioned above since it can't be mutated, there is no such thing as `tuple.remove` which means it is more simple.

Okay enough wording, let's take a look into tuples using our favorite languages.

## Javascript

As Javascript is well... Javascript, there is no such thing as tuples in its API as `Object.create` or `Array.from` but you can still get a sense of tuples. If you use react you can see something like `[value, setValue] = useState(value)`.

Did you see that? this can also be known as `destructuring assignment` but here we can think on `useState` as a function that returns a tuple like.

```javascript
const useState = (defaultValue) => {
  return [defaultValue, () => defaultValue]
} 
```

## Swift

In the other hand, Swift gives us an API to use tuples, take the following example

```swift
let example = (true, 100)

print(example.0)
print(example.1)
```
Note how we access tuple values using indexes such as an array, and that's because tuples are a list of values, but they are wrapped in parentesis.

Knowing what the definition of a tuple is, the following example is invalid.

```swift
example.0 = false // will throw an error because you can't change the tuple value
```

Notice how `example` doesn't really have any kind of API available for us.

![tuples swift](/tuples.png "Tuple API none")

## Python

Python tuples are similar to Swift tuples, but with some different API usages, let's take a look into a normal tuple definition

```python
example = ("is", "this", "an", "array") // you can also do example = "is", "this", "an", "array"

print(example) // ('is', 'this', 'an', 'array')
```

and again, you can't assign new values to existing tuples, for example.

```python
example[0] = "lol?" // TypeError: 'example' object does not support item assignment
```


## Why tuples.

I think this is the most important question, why doesn't `useState` simply return an object with `{ value, setValue }`? why using tuples when you can return an `array`? and the answer to those questions is because tuples have fixed values, where you can't add or remove values, but still iterate over them or find values inside them, a good example of tuples in Swift for example is to return `httpCalls` responses

```swift
func getStats(...) {
    ...
    return(404, 'message')
}
```

And thats it, this is simply a data structure, a new concept for you to use as you need.