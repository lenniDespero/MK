const characters = {
    scorpion: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    kitana: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    liukang: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    sonya: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    subzero: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  };

  const player1 = {
    name: "Scorpion",
    hp: 100,
    img: characters.scorpion,
    weapon: ["Arms", "Legs"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
    player: 1,
  };
  
  const player2 = {
    name: "Subzero",
    hp: 100,
    img: characters.subzero,
    weapon: ["Arms", "Legs"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
    player: 2,
  };

  let arenas = document.querySelector(".arenas");

  function createPlayer(className, playerObject) {
    let player = document.createElement("div");
    player.classList.add(className);
    
    let progressbar = document.createElement("div");
    progressbar.classList.add("progressbar");
    
    let character = document.createElement("div");
    character.classList.add("character");
    
    let life = document.createElement("div");
    life.classList.add("life");
    life.style.width = playerObject.hp + "%";
    
    let playerName = document.createElement("div");
    playerName.classList.add("name");
    playerName.innerText = playerObject.name;

    let img = document.createElement("img");
    img.src = playerObject.img;

    arenas.appendChild(player);

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(playerName);
    character.appendChild(img);
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


  let loseTitle = document.querySelector('.loseTitle')

  function changeHP(player) {
    let points = getRndInteger(1,20);
    if (player.hp <= points) {
      player.hp = 0;
      randomButton.disabled = true;
      otherPlayer = "player" + (player.player == 1 ? 2 : 1);
      loseTitle.textContent = document.querySelector('.' + otherPlayer).querySelector('.name').textContent + " WIN";
    } else {
      player.hp -= points;
    }
    let div = document.querySelector('.player'+player.player);
    let life = div.querySelector('.life')
    life.style.width = player.hp + "%"
  }

  function playRound() {
    changeHP(player1);
    changeHP(player2);
  }

  let randomButton = document.querySelector('.button');
  randomButton.addEventListener('click', playRound);
  

  createPlayer("player1", player1);
  createPlayer("player2", player2);
  player1.attack();
  player2.attack();