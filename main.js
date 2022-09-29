//"js": ["./main.js"]

const quotes = ["a", "b", "c"]
let index = Math.floor(Math.random(3));
console.log(index);

var body = document.getElementsByTagName('body')[0];
let bodyParent = body.parentNode;
body.parentNode.removeChild(body);

var newBody = document.createElement("body");

var h2Element = document.createElement("h1");
h2Element.innerText = "!! RESIST THE MATRIX !!"
newBody.appendChild(h2Element);

// var imageLine = document.createElement("img");
// imageElement.setAttribute("id", "imageLine");
// imageElement.setAttribute("src", "https://www.tropicoco-salon.co.uk/wp-content/uploads/2019/08/line-break.jpg");
// newBody.appendChild(imageElement);



var imageDiv = document.createElement("div");
imageDiv.setAttribute("id", "imageDiv");

var imageElement = document.createElement("img");
imageElement.setAttribute("id", "image");
imageElement.setAttribute("src", "https://thumbs.gfycat.com/FamousAshamedImperialeagle-size_restricted.gif");
imageDiv.appendChild(imageElement);

newBody.appendChild(imageDiv);


var divElement = document.createElement("div");
divElement.setAttribute("id", "quote");
//divElement.innerText = quotes[index];
divElement.innerText = ` "The urge to check Twitter or refresh Reddit becomes a nervous twitch that shatters uninterrupted time into shards too small to support the presence necessary for an intentional life. The tycoons of social media have to stop pretending that they’re friendly nerd gods building a better world and admit they’re just tobacco farmers in T-shirts selling an addictive product to children. Because, let’s face it, checking your “likes” is the new smoking. Simply put, humans are not wired to be constantly wired. Digital minimalism definitively does not reject the innovations of the internet age, but instead rejects the way so many people currently engage with these tools." — Cal Newport`;
newBody.appendChild(divElement);

var embedElement = document.createElement("EMBED");
embedElement.setAttribute("id", "embed");
embedElement.setAttribute("src", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0wMD4IoQ5aJ?utm_source=generator")
newBody.appendChild(embedElement);


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
