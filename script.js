

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("JAVASCRIPT",)
    .pauseFor(1000)
    .deleteAll(200)
    .typeString("HTML")
    .pauseFor(1000)
    .deleteAll(200)
    .typeString("CSS")
    .pauseFor(1000)
    .deleteAll(200)
    .typeString("React")
    .pauseFor(1000)
    .deleteAll(200)
    .start();
