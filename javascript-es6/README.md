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