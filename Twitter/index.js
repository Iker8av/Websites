class tweet{
    constructor(name, username, text, addInfo, comm, rt, likes, date) {
        this.name = name;
        this.username = username;
        this.text = text;
        this.addInfo = addInfo;

        this.comm = comm;
        this.rt = rt;
        this.likes = likes;
        this.date = date;
    }
}

///

class topNew{
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

for (let i = 0; i < topNews.length; i++) {
    const newsElement = topNews1.getElementsByTagName("p");

    newsElement[0].innerHTML = topNews[i].type;
    newsElement[1].innerHTML = topNews[i].title;
    newsElement[2].innerHTML = topNews[i].addInfo;

    if (i < topNews.length - 1) {
        topNews1 = topNews1.cloneNode(true);
        tnSection.appendChild(topNews1);
    }
}

///

class accountsSuggested{
    constructor(accName, accID, accInfo) {
        this.accName = accName;
        this.accID = accID;
        this.accInfo = accInfo;
    }
}

acc1 = new accountsSuggested();
acc1.accName = "Iker Ochoa";
acc1.accID = "@Iker8av";
acc1.accInfo = "";

acc2 = new accountsSuggested();
acc2.accName = "Mary Esquivel";
acc2.accID = "@MaryUwU";
acc2.accInfo = "";

acc3 = new accountsSuggested();
acc3.accName = "Diego Cardenas";
acc3.accID = "@DiegoCar123";
acc3.accInfo = "";

let accArray = [acc1, acc2, acc3];

var faccSec = document.getElementById("followAccSec");
var followAcc = document.getElementById("followAcc");

for (let i = 0; i < accArray.length; i++) {
    const accElement = followAcc.getElementsByTagName("p");

    accElement[0].innerHTML = accArray[i].accName;
    accElement[1].innerHTML = accArray[i].accID;
    accElement[2].innerHTML = accArray[i].accInfo;

    if (i < accArray.length - 1) {
        followAcc = followAcc.cloneNode(true);
        faccSec.appendChild(followAcc);
    }
}

///

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

///

let tweets = document.getElementById("tweet");

for (let i = 0; i < 5; i++) {
    let tweetClone = tweets.cloneNode(true);
    document.getElementById("tweetsSec").appendChild(tweetClone);
}