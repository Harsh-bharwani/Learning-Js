const { log } = require("console");
const {JSDOM} = require("jsdom");
const dom= new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 align="center" class="heading-class">Dom</h1>
    <div class="heading-class">Js</div>
    <div class="heading-class">React</div>
    <div class="heading-class" id="">SpringBoot</div>
    <hr>
    <p id="blue">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quis delectus. Aspernatur eaque, sequi corrupti quasi laboriosam et blanditiis at autem officiis voluptates facilis recusandae!</p>
    <button>Click</button>
    <div>
        <h3 id="fruits">Fruits</h3>
        <ul>
            <li>Grapes</li>
            <li>Banana</li>
            <li>Mango</li>
        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>`);

const document=dom.window.document
console.log(document.querySelector("p").textContent)
