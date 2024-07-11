window.onload = function() {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snippets = [
        "console.log('Hello World!');",
        "const sum = (a, b) => a + b;",
        "document.querySelector('h1').innerText = 'New Title';",
        "alert('Welcome!');",
        "let counter = 0; setInterval(() => counter++, 1000);",
        "fetch('https://api.example.com/data').then(res => res.json()).then(data => console.log(data));",
        "const squared = num => num * num;",
        "document.body.style.backgroundColor = '#f0f0f0';",
        "const today = new Date(); console.log(today.toDateString());",
        "localStorage.setItem('user', 'Adam');",
        "const greet = name => `Hello, ${name}!`;",
        "window.addEventListener('resize', () => console.log('Window resized'));",
        "const items = [1, 2, 3, 4]; const doubled = items.map(x => x * 2);",
        "setTimeout(() => console.log('Timeout finished'), 3000);",
        "const isEven = num => num % 2 === 0;",
        "const user = { name: 'Adam', age: 69 }; console.log(user);",
        "const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);",
        "document.querySelector('button').addEventListener('click', () => alert('Button clicked'));",
        "const sum = (...args) => args.reduce((acc, val) => acc + val, 0);",
        "navigator.geolocation.getCurrentPosition(position => console.log(position.coords));"
    ];

    const fallingSnippets = [];

    class Snippet {
        constructor(text, x, y, speed) {
            this.text = text;
            this.x = x;
            this.y = y;
            this.speed = speed;
        }

        draw() {
            ctx.font = "14px 'Courier New'";
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillText(this.text, this.x, this.y);
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = -50;
                this.x = Math.random() * canvas.width;
                this.text = snippets[Math.floor(Math.random() * snippets.length)];
            }
        }
    }

    function createSnippets() {
        // Number
        for (let i = 0; i < 10; i++) {
            const text = snippets[Math.floor(Math.random() * snippets.length)];
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            // Speed
            const speed = Math.random() * 1.5 + 0.5;
            fallingSnippets.push(new Snippet(text, x, y, speed));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fallingSnippets.forEach(snippet => {
            snippet.update();
            snippet.draw();
        });
        requestAnimationFrame(animate);
    }

    createSnippets();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};
