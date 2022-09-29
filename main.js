//"js": ["./main.js"]

const quotes = [`"I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it." – Morpheus (The Matrix)"`, 
`"You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind. – Morpheus (The Matrix)"`, 
`"Neo, sooner or later you’re going to realize, just as I did, there’s a difference between knowing the path and walking the path." - Morpheus`,
`“This is your last chance. After this, there is no turning back. You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I’m offering is the truth. Nothing more.” ― Morpheus`,
`"The matrix is everywhere. It is all around us. It is the world that has been pulled over your eyes to blind you from the truth. A prison for your mind." - Morpheus`,
]

const imageArray = [
    "https://thumbs.gfycat.com/FamousAshamedImperialeagle-size_restricted.gif",
    "https://i.gifer.com/origin/91/919ae39c8d3eac099d096e888e23616c.gif",
    "https://j.gifs.com/lx055J.gif",
    "https://c.tenor.com/5NU8u6qKF_AAAAAC/pills-drugs.gif",
    "https://i.makeagif.com/media/8-30-2015/GpLCgO.gif",
    "https://c.tenor.com/oF0dlVPAYMAAAAAC/the-matrix-reloaded-the-matrix.gif",
    "https://c.tenor.com/ZQL4vQ4hqJYAAAAC/power-the-matrix.gif",
    "https://c.tenor.com/f8Br76UGmCIAAAAd/neo-matrix.gif",
    "https://i.makeagif.com/media/1-03-2016/j8Iwzf.gif",
    "https://c.tenor.com/zwZlETmn3v0AAAAd/neo-agent-smith.gif"
]

let index = Math.floor(Math.random() * quotes.length);
let imageIndex = Math.floor(Math.random() * imageArray.length);

var body = document.getElementsByTagName('body')[0];
let bodyParent = body.parentNode;
body.parentNode.removeChild(body);

var newBody = document.createElement("body");
newBody.setAttribute("id", "bodyBackground");
console.log(newBody);

var heading = document.createElement("h1");
heading.setAttribute("id", "heading");
heading.innerText = "!! RESIST THE MATRIX !!"
newBody.appendChild(heading);

//background-image: url("https://static.vecteezy.com/system/resources/thumbnails/002/019/901/original/matrix-digital-background-free-video.jpg");

// var imageLine = document.createElement("img");
// imageElement.setAttribute("id", "imageLine");
// imageElement.setAttribute("src", "https://www.tropicoco-salon.co.uk/wp-content/uploads/2019/08/line-break.jpg");
// newBody.appendChild(imageElement);

var divElement = document.createElement("div");
divElement.setAttribute("id", "quote");
divElement.innerText = quotes[index];
newBody.appendChild(divElement);


var imageDiv = document.createElement("div");
imageDiv.setAttribute("id", "imageDiv");


var imageElement = document.createElement("img");
imageElement.setAttribute("id", "image");
//imageElement.setAttribute("src", "https://thumbs.gfycat.com/FamousAshamedImperialeagle-size_restricted.gif");
imageElement.setAttribute("src", imageArray[imageIndex]);
imageDiv.appendChild(imageElement);

newBody.appendChild(imageDiv);


var embedElement = document.createElement("EMBED");
embedElement.setAttribute("id", "embed");
embedElement.setAttribute("src", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0wMD4IoQ5aJ?utm_source=generator")
newBody.appendChild(embedElement);

var lastQuote = document.createElement("div");
lastQuote.setAttribute("id", "lastQuote");
lastQuote.innerText = ` "The urge to check Twitter or refresh Reddit becomes a nervous twitch that shatters uninterrupted time into shards too small to support the presence necessary for an intentional life. The tycoons of social media have to stop pretending that they’re friendly nerd gods building a better world and admit they’re just tobacco farmers in T-shirts selling an addictive product to children. Because, let’s face it, checking your “likes” is the new smoking. Simply put, humans are not wired to be constantly wired. Digital minimalism definitively does not reject the innovations of the internet age, but instead rejects the way so many people currently engage with these tools." — Cal Newport`;
newBody.appendChild(lastQuote);

bodyParent.appendChild(newBody);

console.log(newBody);
console.log(bodyParent);






// spotify embed playlist:
// <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0wMD4IoQ5aJ?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


// quote in text box:
// “The urge to check Twitter or refresh Reddit becomes a nervous twitch that shatters uninterrupted time into shards too small 
// to support the presence necessary for an intentional life.
// The tycoons of social media have to stop pretending that they’re friendly nerd gods building a better world and admit they’re just tobacco farmers in T-shirts 
// selling an addictive product to children. Because, let’s face it, checking your “likes” is the new smoking. 
// Simply put, humans are not wired to be constantly wired.
// Digital minimalism definitively does not reject the innovations of the internet age, but instead rejects the way so many people currently engage with these tools.” 
// - Cal Newport
