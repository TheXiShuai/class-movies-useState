# React useState

In this class we practice with useState.
We are importing a json file to use it as a database.

We create a variable using the useState hook and we use it to render the data in the json file.

Every time we want to display different data or change the data we use the variable and the function that we get from the useState hook.

for example:

```javascript
const [people, setPeople] = useState(data);

const removeItem = (id) => {
  let newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople);
};
```

If we don't update the state with the setPeople function, the data will not change.
Every time the state variable changes, the component will re-render.