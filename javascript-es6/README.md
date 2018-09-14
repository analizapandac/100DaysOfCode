# ES6 Javascript Lessons

### Array Helpers and Why/When to Use Them

1. **forEach** - When you want to call some method multiple times passing in a different argument each time, less code logic than a normal for loop

```
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' }
    ];
    
    posts.forEach((post) => {
        savePost(post);
    });
}
```

```
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
];
var areas = [];

images.forEach((image) => {
    areas.push(image.height * image.width);
});
```

1. **map** 

```
Implementing `pluck` function.

function pluck(array, property) {
    return array.map(item => {
        return item[property];
    });
}
```

1. **filter** - When you need to filter a list of data.:D
```
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(user => {
    return user.admin;
});
```

Implementing `reject` function where `iteratorFunction` returns a boolean value.

```
function reject(array, iteratorFunction) {
  return array.filter(item => {
      return !iteratorFunction(item);
  });
}
```