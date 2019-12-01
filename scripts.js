function init() {
  state = document.getElementById("stateName")
  paragraphForState = document.getElementById("stateParagraph")
  stateImage = document.getElementById("image")
  stateImageTwo = document.getElementById("imageTwo")
  explainImg = document.getElementById("imgExplain")

  //Buttons
  missouri = document.getElementById("missouri")
  kansas = document.getElementById("kansas")
  florida = document.getElementById("florida")
  illinois = document.getElementById("illinois")
  colorado = document.getElementById("colorado")
  georgia = document.getElementById("georgia")
  california = document.getElementById("california")
  michigan = document.getElementById("michigan")

  missouri.addEventListener("click", function(event) {
    state.innerHTML = "Kansas City, Missouri"
    paragraphForState.innerHTML = `Although Missouri is the state that I was born in and currently live in, it's definetly the most interesting
    part of my life. Starting from the beginning, I only attended 3 schools. Woodland Elementary School from kindergarten to 1st grade. Frontier School
    of Innovation from 2nd grade to freshman year (9th grade). Although, after a month or so of highschool I decided to go into homeschooling.
    While I was homeschooled, I graduated early. I mean, it was only a year early but it was still early!`
    stateImage.src="./images/IMG_20190710_203627.jpg"
    stateImageTwo.src="./images/IMG_20190710_210256.jpg"
    explainImg.innerHTML = `Picture 1: My boyfriend, Trevor, and our friend, Michael, goofing around while we walked around the WWII monument and
    looked ver the ledge at Union Station. <br> Picture 2: The same day, Union station and its fountain. I put this image on google cause I thought
    it was that good.`
  })
  missouri.addEventListener("mouseover", function(event) {
    missouri.style.backgroundColor = "#F1B82D"
  })

  kansas.addEventListener("click", function(event) {
    state.innerHTML = 'Ottawa, Kansas & Spring Hill, Kansas'
    paragraphForState.innerHTML = `I realize that because I live in Kansas City, I will obviously have been to Kansas but I do actually go further
    into Kansas than Kansas City. I go to Spring Hill to see my grandma, and Ottawa to see my boyfriend. Yes, the drives are very long but judging
    other people's driving and music gets me through it. Ottawa is a cute little town.`
    stateImage.src="./images/TsukitheCat.jpg"
    stateImageTwo.src="./images/SpringHillSunset.jpg"
    explainImg.innerHTML = `Picture 1: The cutest homework helper in the world! She is in Ottawa so this is related I swear! Her name is Tsuki, which
    apparently means Moon in Japanese. She is a gray, fluffly, very lovey kitty! She will YELL at you (in meows) when she needs some attention.
    <br> Picture 2: A very pretty sunset outside of my grandma's apartment.`
  })
  kansas.addEventListener("mouseover", function(event) {
    kansas.style.backgroundColor = "#0051BA"
  })

  florida.addEventListener("click", function(event) {
    state.innerHTML = "Merrit Island, Florida & Orlando, Florida"
    paragraphForState.innerHTML = `I went to Florida every year or so to go see my uncle, aunt, and three cousins. It was always really really fun.
    The last time I went, last year, was the most fun. My amazing uncle and aunt payed for me to go to Universal and I got to ride all the Harry Potter
    rides I wanted, drank some butterbeer, and bought a wand. Yes, the wand was extremely overpriced, but it was so worth it. I'm a big Harry Potter
    nerd so it was like heaven to me. The wand worked with little robots around the Harry Potter part of the park so that I could feel like a wizard
    and do some spells!! It was really cool. We went to the beach, often. Beach visits were always fun. Nice walks and swims and boogie boarding. Although
    of course the sand was bleh and sucked but I mean you can't have a beach without the sand!`
    stateImage.src="./images/HarryPotterFlorida.jpg"
    stateImageTwo.src="./images/boatsFlorida.jpg"
    explainImg.innerHTML = `Picture 1: HOGWARTS!!! Well, Hogwarts at Universal. Eh, it's the closest that I'm ever going to get. <br>Picture 2:
    A veiw from the Cape Canaveral Exploration Tower. Some big boats, a bridge. It was really cool to see all that and more from one place. I got a
    little snow globe sea turtle from there. I call the turtle Pickle.`
  })
  florida.addEventListener("mouseover", function(event) {
    florida.style.backgroundColor = "#733635"
  })

  illinois.addEventListener("click", function(event) {
    state.innerHTML = "Chicago, Illinois"
    paragraphForState.innerHTML = `So, after I got back from Florida, my mom took my sister, my brother, and I to a town near Chicago to go
    see my older brother, Seth. We hung out in the hotel after we picked him up and then after a day we went into Chicago by train! It was the first time
    I had rode a train aside from the Zoo train and the Worlds of Fun train. After we got there, we walked around a little bit and met my mom's
    WoW friend Eric. He is very bad at directions and lead us the wrong way when we tried to get to the Bean and then to the aquarium.`
    stateImage.src="./images/riverChicago.jpg"
    stateImageTwo.src="./images/chicagoBean.jpg"
    explainImg.innerHTML = `Picture 1: It's a river we passed in Chicago. I'm not sure if it's like a big river or anything but y'know its there. <br>
    Picture 2: The Chicago Bean!! I took a selfie in this bean but thats in another picture. Very #GenZ of me I suppose. Not much to say about it except
    that there were too many people standing under it to enjoy it. There are far too many people in this world who need to see every little thing
    to get the full experience. I enjoyed just taking a selfie in the Bean and one little picture as we left.`
  })
  illinois.addEventListener("mouseover", function(event) {
    illinois.style.backgroundColor = "#CD1041"
  })

  colorado.addEventListener("click", function(event) {
    state.innerHTML = "Estes Park, Colorado"
    paragraphForState.innerHTML = `My family went to Estes Park 2 years ago or so to attend my cousin's wedding. We stayed in a hotel that kinda looked
    like a log cabin and there was a mountain that looked like a lady laying down. It was a very beautiful place and a very beautiful wedding. There
    apparently were bears there so you had to make sure the dumpster was closed so they didn't try to eat our trash! Man did I want to see a bear, but
    I did not. :c`
    stateImage.src="./images/mountainsColorado.jpg"
    stateImageTwo.src="./images/onthewaytoColorado.jpg"
    explainImg.innerHTML= `Picture 1: Some mountains and pretty clouds taken on a trip in Estes Park around and in the mountains. <br>Picture 2:
    A picture of another car, some clouds, some grass. It was on the way to Estes Park, because we drove, and I guess I thought it was pretty.`
  })
  colorado.addEventListener("mouseover", function(event) {
    colorado.style.backgroundColor = "#1F4E2E"
  })
}

window.onload = init;
