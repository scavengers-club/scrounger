# Scrounger Grading Notes

- The avatars are super cute (love that drop shadow on the radio buttons) but I was getting a broken image when I was logged in
- I deducted a point on testing b/c there is a console warning that I also saw on the app -- React gets upset when a piece of state goes from "uncontrolled" to "controlled" -- i think its happening because you're using an empty object in your default state. Instead it needs to have all the keys that adventure will eventually have:

```js
  {
    name: '',
    description: '',
    // etc...
  };
```

- It really is great -- super clean code, one tiny bug, your usability is fantastic. Overall you should be super proud.

## Grade

| Rubric                            | Deduction |
| --------------------------------- | --------- |
| Snapshot tests for all components | -1        |
| Works as intended with no bugs    | -1        |

**Total Points: 148 / 150**
