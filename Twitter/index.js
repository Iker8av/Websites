class topNew {
    constructor(type, title, addInfo) {
        this.type = type;
        this.title = title;
        this.addInfo = addInfo;
    }
}

news1 = new topNew();
news1.type = "Global News • Today";
news1.title = "It was created a new comptetition for Twitter by Iker Ochoa";
news1.addInfo = "";

news2 = new topNew();
news2.type = "Gaming";
news2.title = "Nintendo Switch reaches 107.5 millions of units sale";
news2.addInfo = "";

news3 = new topNew();
news3.type = "Celebrities • Trending";
news3.title = "Kunno";
news3.addInfo = "11,280 tweets";

news4 = new topNew();
news4.type = "Global News • Today";
news4.title = "It was created a new comptetition for Twitter by Iker Ochoa";
news4.addInfo = "";

news5 = new topNew();
news5.type = "Gaming";
news5.title = "Nintendo Switch reaches 107.5 millions of units sale";
news5.addInfo = "";

let topNews = [news1, news2, news3, news4, news5];

var tnSection = document.getElementById("topNewsSec");
var topNews1 = document.getElementById("topNews");

for (let i = 0; i < topNews.length - 1; i++) {
    const newsElement = topNews1.getElementsByTagName("p");

    newsElement[0].innerHTML = topNews[i].type;
    newsElement[1].innerHTML = topNews[i].title;
    newsElement[2].innerHTML = topNews[i].addInfo;

    topNews1 = topNews1.cloneNode(true);
    tnSection.appendChild(topNews1);
}

let tweets = document.getElementById("tweet");

for (let i = 0; i < 10; i++) {
    let tweetClone = tweets.cloneNode(true);
    document.getElementById("tweetsSec").appendChild(tweetClone);
}