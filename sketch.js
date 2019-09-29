var url="https://itunes.apple.com/fr/search?term=podcast&genreId=1301&limit=200";

var feed;
var feeds = [];
var album = [];
var texts = [];
var n;

var data = [];
var img;
var cover;

var saveCount = 0;

function preload() {
  data = loadJSON("https://itunes.apple.com/search?term=podcast&genreId=1301&limit=100", 'jsonp');
}

function setup() {
  createCanvas(1080, 1080);

  // print(data);
  feed = data.resultCount;
  feeds = data.results;
  console.log(feed);
  
  for (let i = 0; i < feeds.length; i ++) {
    append(album, feeds[i].artworkUrl600);
    append(texts, feeds[i].collectionName);
  }
  console.log(album);
  console.log(texts);
  n = int(random(0,99));
  cover = loadImage(album[n]);
  img = loadImage('Artboard.png');

}


function draw() {
  background(220);
  image(cover, 200, 200, 680, 680);
  image(img, 0, 0);
  
  fill(100);
  textSize(16);
  textAlign(CENTER);
  text(texts[n], 540, 1070);
}

function mousePressed() {
  location.reload();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    save("screenshot" + saveCount + ".png");
    saveCount++;
  }
}