export default class User {
    // constructor fields with types
    name: string;
    email: string;
    password: string;
    wins: number;
    losses: number;
    ties: number;
    gamesPlayed: number;
    winPercentage: number;
    winStreak: number;

    constructor(name: string, 
        email: string, 
        password: string, 
        wins: number, 
        losses: number, 
        ties: number, 
        gamesPlayed: number, 
        winPercentage: number, 
        winStreak: number) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.wins = wins;
            this.losses = losses;
            this.ties = ties;
            this.gamesPlayed = gamesPlayed;
            this.winPercentage = winPercentage;
            this.winStreak = winStreak;
        }
    
    // getters and setters
    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getWins() {
        return this.wins;
    }

    setWins(wins: number) {
        this.wins = wins;
    }

    getLosses() {
        return this.losses;
    }

    setLosses(losses: number) {
        this.losses = losses;
    }

    getTies() {
        return this.ties;
    }

    setTies(ties: number) {
        this.ties = ties;
    }

    getGamesPlayed() {
        return this.gamesPlayed;
    }

    setGamesPlayed(gamesPlayed: number) {
        this.gamesPlayed = gamesPlayed;
    }

    getWinPercentage() {
        return this.winPercentage;
    }

    setWinPercentage(winPercentage: number) {
        this.winPercentage = winPercentage;
    }

    getWinStreak() {
        return this.winStreak;
    }

    setWinStreak(winStreak: number) {
        this.winStreak = winStreak;
    }

    // create a javascript object from the class
    toObject() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            wins: this.wins,
            losses: this.losses,
            ties: this.ties,
            gamesPlayed: this.gamesPlayed,
            winPercentage: this.winPercentage,
            winStreak: this.winStreak,
        }
    }
}