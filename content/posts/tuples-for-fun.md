---
title: "Tuples for Fun"
date: 2020-04-01T18:18:03-05:00
draft: false
---

As i already mention on my previous posts, Python Javascript(ts) and Swift are some of my favorite languages out there, i really enjoy writting programs with them, and this past days i come into how tuples works on this 3 languages, which one have a better API that the other (spoiler: Python)

### Tuples

So whats a tuple? there might be many different ways to describe a Tuple Data type, but the easiest one i can think of right now is like.

*a tuple is a data structure that is inmutable and have they elements in orderer sequence"

Pretty simple right? is something similar to an array, but as mentioned above since it can be mutated, there is no such things as `tuple.remove` which means its a more simple and easy way to structure data when you know how the data will be.

Okay enought wording, lets take a look into tuples in our favorite languages.

## Javascript

As Javascript is well Javascript, there is no such thing as tuples in they API as `Object.create` or `Array.from` but still you can still get a sense of tuples, if you use react you can see something like `[value, setValue] = useState(value)`.

Did you see that? it looks like an this can be also know as `destructuring assignment` but here we can think on `useState` as a function that return a tuple like.

```javascript
const useState = (defaultValue) => {
  return [defaultValue, () => defaultValue]
} 
```

## Swift

In the other hand, Swift give us an API to use tuples, take the following example

```swift
let example = (true, 100)

print(example.0)
print(example.1)
```
Note how we access tuple values using indexes such as an array, and thats because tuples are a list of values, but they are wrapped in parentesis

Nollowing what the tuple definition talk about, `tuples` are inmutables which means

```swift
example.0 = false // will throw an error because you can't change the tuple value
```

Notice how `example` dosen't really have any kind of API available for us.

![tuples swift](/tuples.png "Tuple API none")

## Python

Python tuples are similar to Swift tuples, but with some different API usages, lets take a look to a normal tuple definition

```python
example = ("is", "this", "an", "array") // you can also do example = "is", "this", "an", "array"

print(example) // ('is', 'this', 'an', 'array')
```

and again, you can't assign new values to existing tuples, for example.

```python
example[0] = "lol?" // TypeError: 'example' object does not support item assignment
```


## Why tuples.

I think this is the most important question, why `useState` simply don't return an object with `{ value, setValue }`? why using tuples when you can return an `array`? and the answer to that question is because tuples have fixed values, where you can't add or remove values, but still iterate over them or find values inside them, a good example of tuples in Swift for example is to return `httpCalls` response

```swift
func getStats(...) {
    ...
    return(404, 'message')
}
```

And thats it, this is simply a data structure, a new concept for you to use as you need.