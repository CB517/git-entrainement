const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "France",
  sport: "Football",
  year: 1998,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Aimé JACQUET",
    matches: 53,
  },
  players: [
    {
      name: "Fabien Barthez",
      position: "goalkeeper",
      number: 16,
      isCaptain: false,
      club: "AS Monaco",
    },
    {
      name: "Lionel Charbonnier",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      club: "AJ Auxerre",
    },
    {
      name: "Bernard Lama",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      club: "West Ham United FC",
    },
    {
      name: "Laurent Blanc",
      position: "defender",
      number: 5,
      isCaptain: false,
      club: "Olympique de Marseille",
    },
    {
      name: "Marcel Desailly",
      position: "defender",
      number: 8,
      isCaptain: false,
      club: "AS Milan",
    },
    {
      name: "Vincent Candela",
      position: "defender",
      number: 2,
      isCaptain: false,
      club: "AC Rome",
    },
    {
      name: "Franck Leboeuf",
      position: "defender",
      number: 18,
      isCaptain: false,
      club: "Chelsea FC",
    },
    {
      name: "Bixente Lizarazu",
      position: "defender",
      number: 3,
      isCaptain: false,
      club: "FC Bayern Munich",
    },
    {
      name: "Lilian Thuram",
      position: "defender",
      number: 15,
      isCaptain: false,
      club: "Parme AC",
    },
    {
      name: "Alain Boghossian",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      club: "UC Sampdoria",
    },
    {
      name: "Didier Deschamps",
      position: "midfielder",
      number: 7,
      isCaptain: true, // Il était capitaine de l'équipe de France en 1998
      club: "Juventus FC",
    },
    {
      name: "Youri Djorkaeff",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      club: "Inter Milan",
    },
    {
      name: "Christian Karembeu",
      position: "midfielder",
      number: 19,
      isCaptain: false,
      club: "Real Madrid CF",
    },
    {
      name: "Emmanuel Petit",
      position: "midfielder",
      number: 17,
      isCaptain: false,
      club: "Arsenal FC",
    },
    {
      name: "Robert Pirès",
      position: "midfielder",
      number: 11,
      isCaptain: false,
      club: "FC Metz",
    },
    {
      name: "Patrick Vieira",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      club: "Arsenal FC",
    },
    {
      name: "Zinédine Zidane",
      position: "midfielder",
      number: 10,
      isCaptain: false,
      club: "Juventus FC",
    },
    {
      name: "Bernard Thierry Diomède",
      position: "forward",
      number: 13,
      isCaptain: false,
      club: "AJ Auxerre",
    },
    {
      name: "Christophe Dugarry",
      position: "forward",
      number: 21,
      isCaptain: false,
      club: "Olympique de Marseille",
    },
    {
      name: "Stéphane Guivarc'h",
      position: "forward",
      number: 9,
      isCaptain: false,
      club: "AJ Auxerre",
    },
    {
      name: "Thierry Henry",
      position: "forward",
      number: 12,
      isCaptain: false,
      club: "AS Monaco",
    },
    {
      name: "David Trezeguet",
      position: "forward",
      number: 20,
      isCaptain: false,
      club: "AS Monaco",
    },
  ],  
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, club }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Club: ${club}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "club":
      setPlayerCards(players.sort((a, b) => a.club.localeCompare(b.club)));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
  default:
    setPlayerCards();
  }
});
