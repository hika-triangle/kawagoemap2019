window.canvas;
window.myImage;

function setup(){
  window.canvas = createCanvas(400, 562);
  window.canvas.parent("P5Canvas");

  colorMode(RGB,255);

  window.myImage = loadImage("./image/kawagoemap1.png");
}

function draw(){
  noStroke();

  image(window.myImage, 30, 10);
}

function mousePressed(){
  if(270<mouseX && mouseX<330 && 80<mouseY && mouseY<145){
    document.getElementById("picture").innerHTML = '<div class="img_wrap"><a><input type="image" src="./image/9196EBD3-8DA2-4ACB-AEE1-F3974683267F.JPEG"  onclick="rewriteDiv1();"/></a></div>   <div class="img_wrap"><a><input type="image" src="./image/000038.JPG" onclick="rewriteDiv2();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>氷川神社</p>';
    document.getElementById("text").innerHTML ='<p>縁結びの神様、川越氷川神社。夏は風鈴が綺麗。<br>「むすびcafé」のおにぎり、おにぎりってこんなに美味しいんだ…って思う。</p>';
    }
  else if(90<mouseX && mouseX<185 && 160<mouseY && mouseY<197){
    document.getElementById("picture").innerHTML = '<div class="img_wrap2"><a><input type="image" src="./image/IMG_9330.jpg" onclick="rewriteDiv3();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>菓子屋横丁</p>';
    document.getElementById("text").innerHTML ='<p>菓子屋横丁に入ってすぐのパン屋さん、「川越ベーカリー 楽楽」。味噌パンが最高です。。 <br> 奥まで進むと昔懐かしい駄菓子が並ぶ、昭和レトロな街並み。</p>';
    }
  else if(205<mouseX && mouseX<230 && 165<mouseY && mouseY<191){
    document.getElementById("picture").innerHTML = '<div class="img_wrap"><a><input type="image" src="./image/000021.JPG" onclick="rewriteDiv4();" /></a></div>  <div class="img_wrap"><a><input type="image" src="./image/000020.JPG" onclick="rewriteDiv5();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>HATSUNEYA GARDEN</p>';
    document.getElementById("text").innerHTML ='<p>ちょっとお高めだけどイチオシ。とりあえず河越ほうじ茶ラテを注文しましょう。はい。</p>';
    }
  else if(192<mouseX && mouseX<215 && 188<mouseY && mouseY<206){
    document.getElementById("picture").innerHTML = '<div class="img_wrap3"><a><input type="image" src="./image/000041.jpg" onclick="rewriteDiv6();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>時の鐘</p>';
    document.getElementById("text").innerHTML ='<p>川越といえばこれ。近くにはさつまいもチップスのお店とか色々あるよ。<br>きっとインスタ映え。</p>';
    }
  else if(105<mouseX && mouseX<192 && 213<mouseY && mouseY<251){
    document.getElementById("picture").innerHTML = '<div class="img_wrap4"><a><input type="image" src="./image/IMG_9331.jpg" onclick="rewriteDiv7();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>一番街商店街</p>';
    document.getElementById("text").innerHTML ='<p>和菓子が多いよね〜〜さすが小江戸川越芋の街。写真は抹茶のアイスとわらび餅だけど。</p>';
    }
  else if(300<mouseX && mouseX<360 && 170<mouseY && mouseY<235){
    document.getElementById("picture").innerHTML = '<div class="img_wrap6"><a><input type="image" src="./image/IMG_4360.jpg" onclick="rewriteDiv8();" /></a></div>  <div class="img_wrap6"><a><input type="image" src="./image/IMG_4361.jpg" onclick="rewriteDiv22();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>川越高校</p>';
    document.getElementById("text").innerHTML ='<p>くすのき祭。かの有名なウォーターボーイズも観られます。2018年の来校者数、なんと15224人。<br> 毎年15000人は超えてしまう、超人気ハイクオリティ文化祭。門がすごいよ。全部すごいけど。</p>';
    }
  else if(185<mouseX && mouseX<290 && 250<mouseY && mouseY<293){
    document.getElementById("picture").innerHTML = '<div class="img_wrap2"><a><input type="image" src="./image/4A0FAFD3-FEE8-4F66-B66F-DA68A44A1566.jpg" onclick="rewriteDiv9();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>大正浪漫夢通り</p>';
    document.getElementById("text").innerHTML ='<p>街並みが綺麗なんだな〜５月は鯉のぼり。小洒落たカフェとかあるよ。</p>';
    }
  else if(265<mouseX && mouseX<330 && 293<mouseY && mouseY<345){
    document.getElementById("picture").innerHTML = '<div class="img_wrap2"><a><input type="image" src="./image/C62A0825-D3F8-4E91-AE51-AFD3A83A7013.jpg" onclick="rewriteDiv10();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>喜多院</p>';
    document.getElementById("text").innerHTML ='<p>いとをかし。個人的には桜の季節がおすすめ。</p>';
    }
  else if(160<mouseX && mouseX<185 && 315<mouseY && mouseY<350){
    document.getElementById("picture").innerHTML = '<div class="img_wrap5"><a><input type="image" src="./image/IMG_9277.jpg" onclick="rewriteDiv11();" /></a></div>  <div class="img_wrap5"><a><input type="image" src="./image/IMG_9397.jpg" onclick="rewriteDiv12();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>マチルダ / ラフテル</p>';
    document.getElementById("text").innerHTML ='<p>１階がパンケーキ屋さんの「マチルダ」、２階がフレンチトースト屋さんの「ラフテル」。違うお店だよ。<br> でもどっちも安いし美味しいしおしゃれ。</p>';
    }
  else if(190<mouseX && mouseX<230 && 320<mouseY && mouseY<355){
    document.getElementById("picture").innerHTML = '<div class="img_wrap6"><a><input type="image" src="./image/188BC8FA-1C4D-434C-A94D-20ECF662865C.jpg" onclick="rewriteDiv13();" /></a></div>  <div class="img_wrap6"><a><input type="image" src="./image/IMG_6852.jpg" onclick="rewriteDiv14();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>あかりや</p>';
    document.getElementById("text").innerHTML ='<p>あんみつ。うどんとかのお食事もちゃんとあります。お店の前でお団子焼いてるのみると買いたくなっちゃうよね。</p>';
    }
  else if(85<mouseX && mouseX<140 && 340<mouseY && mouseY<386){
    document.getElementById("picture").innerHTML = '<div class="img_wrap6"><a><input type="image" src="./image/IMG_7508.JPG" onclick="rewriteDiv15();" /></a></div>  <div class="img_wrap6"><a><input type="image" src="./image/IMG_8645.jpg" onclick="rewriteDiv16();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>川越女子高校</p>';
    document.getElementById("text").innerHTML ='<p>2018年の来場者数、13308人。川越市駅から徒歩５分の好立地。紫苑の乙女達が待っています。そうです。 <br> 紫苑祭行こうね〜〜〜！！！(大声)  ちなみに春は桜並木が綺麗だよ。</p>';
    }
  else if(180<mouseX && mouseX<215 && 410<mouseY && mouseY<440){
    document.getElementById("picture").innerHTML = '<div class="img_wrap2"><a><input type="image" src="./image/IMG_6867.jpg" onclick="rewriteDiv17();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>猫屋</p>';
    document.getElementById("text").innerHTML ='<p>ここにきてなんで猫カフェなのって？可愛かったんですもの。</p>';
    }
  else if(130<mouseX && mouseX<180 && 375<mouseY && mouseY<440){
    document.getElementById("picture").innerHTML = '<div class="img_wrap4"><a><input type="image" src="./image/IMG_9328.jpg" onclick="rewriteDiv18();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>本川越駅</p>';
    document.getElementById("text").innerHTML ='<p>西武新宿線をご利用の方はこちらへ。PePeあるしスタバあるし。便利。</p>';
    }
  else if(175<mouseX && mouseX<215 && 455<mouseY && mouseY<485){
    document.getElementById("picture").innerHTML = '<div class="img_wrap7"><a><input type="image" src="./image/000037.JPG" onclick="rewriteDiv19();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>ACROSS THE RIVER</p>';
    document.getElementById("text").innerHTML ='<p>タピオカ飲みたいならここ。美味しい。店名訳すとそのまんまだけどかっこいいと思っちゃうよね。</p>';
    }
  else if(30<mouseX && mouseX<120 && 386<mouseY && mouseY<440){
    document.getElementById("picture").innerHTML = '<div class="img_wrap4"><a><input type="image" src="./image/4C29B9C4-9F3D-4810-85E3-900B437B6ADB.jpg" onclick="rewriteDiv20();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>川越市駅</p>';
    document.getElementById("text").innerHTML ='<p>東武東上線をご利用の方はこちらへ。すいません写真がなかった。<br> 川越の和菓子屋さん「くらづくり」の店舗があります、茶道部時代にお世話になったのでとりあえず茶室とお茶で勘弁。<br> ちなみにお茶は、「永峰園」の抹茶。</p>';
    }
  else if(140<mouseX && mouseX<245 && 510<mouseY && mouseY<600){
    document.getElementById("picture").innerHTML = '<div class="img_wrap2"><a><input type="image" src="./image/IMG_0649.jpg" onclick="rewriteDiv21();" /></a></div>';
    document.getElementById("place").innerHTML ='<p>川越駅</p>';
    document.getElementById("text").innerHTML ='<p>JR川越線、JR八高川越線、東武東上線をご利用の方はこちらへ。 <br> レストラン、ショッピング、なんでもどうぞ。旅はここから。</p>';
    }

 }
