# React Tutorial

[https://reactforbeginners.com](https://reactforbeginners.com)

## Progress

- [x] Lesson 1 (03/05/2019)
- [x] Lesson 2 (04/05/2019)
- [x] Lesson 3 (04/05/2019)
- [x] Lesson 4 (05/05/2019)
- [x] Lesson 5 (05/05/2019)
- [x] Lesson 6 (13/05/2019)
- [x] Lesson 7 (16/05/2019)
- [x] Lesson 8 (16/05/2019)
- [x] Lesson 9 (16/05/2019)
- [x] Lesson 10 (16/05/2019)
- [x] Lesson 11 (22/05/2019)
- [x] Lesson 12 (22/05/2019)
- [x] Lesson 13 (23/05/2019)
- [x] Lesson 14 (23/05/2019)
- [x] Lesson 15 (23/05/2019)
- [x] Lesson 16 (23/05/2019)
- [ ] Lesson 17
- [ ] Lesson 18
- [ ] Lesson 19
- [ ] Lesson 20
- [ ] Lesson 21
- [ ] Lesson 22
- [ ] Lesson 23
- [ ] Lesson 24
- [ ] Lesson 25
- [ ] Lesson 26
- [ ] Lesson 27
- [ ] Lesson 28
- [ ] Lesson 29

## Accomplishments

- 03/05/2019: Completed setup.
- 04/05/2019: Learned and created first React component.
- 05/05/2019: Added HTML to React components using JSX.
- 05/05/2019: Added CSS to React components.
- 13/05/2019: Made basic layout by adding more components.
- 16/05/2019: Started using props. Modified header using props.
- 16/05/2019: Changed Header into a stateless functional component.
- 16/05/2019: Created routing component. Made basic routing function.
- 22/05/2019: Made submit button on initial page redirect page to store after input.
- 23/05/2019: Created fish form and handle submission of info to a class 2 layers up.
- 23/05/2019: Made button to load sample fishes to fish list.
- 23/05/2019: Displaying fish picture and info on left component.
- 23/05/2019: Made "add to cart" button actually add fish to order.

## Useful Notes

- React.Fragment, blank tags
- Comments: { /\* [comment] \*/ }
- Put comments inside returned element so only one thing is returned.
- If page doesn't load after 'npm start', try 'sudo npm start'.
- \$r in console opens up currently selected react object.
- Can write components like a JS function if the component rendered is stateless (Stateless Functional Component).
  - Can call props directly in SFC, given that props is passed as an argument.
  - Can pass object into SFC instead of props.
- Use colon to make variable in route path.
- Buttons/forms submit is done inline: onSubmit={[function]}
- Can create ref in class to pass info between functions: x.createRef().
- Any additional function that uses "this" must use arrow notation.
- this.props.history.push([ext]) can be used to reroute to different page with minimal loading time.
- Can pass functions down to children.
- A component's key cannot be easily accessed, thus a popular workaround is to pass it in twice (as key and also as something else).
