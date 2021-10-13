const characters = {
    scorpion: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    kitana: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    liukang: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    sonya: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    subzero: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  };

  const player1 = {
    name: "Scorpion",
    hp: 85,
    img: characters.scorpion,
    weapon: ["Arms", "Legs"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  };
  
  const player2 = {
    name: "Subzero",
    hp: 90,
    img: characters.subzero,
    weapon: ["Arms", "Legs"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  };

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

    let arenas = document.querySelector(".arenas");
    arenas.appendChild(player);

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(playerName);
    character.appendChild(img);
  }
  
  createPlayer("player1", player1);
  createPlayer("player2", player2);
  player1.attack();
  player2.attack();