let obj = {
    posts: []
}
for (let i = 0; i < 50; i++) {
    obj.posts.push({
        id: i,
        title: lorem(4),
        body: lorem(10),
        active: Math.random() < 0.5
    })
}
console.log(JSON.stringify(obj))

function lorem(n) {
    let words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
    let lorem = [];
    while (--n) lorem.push(words[Math.floor(Math.random() * words.length)]);
    return (lorem.join(" "))
}
