import type User from './userModel'

// a class to store the session data
export class Session {
    sessionId: string
    player1: User
    player2: User
    player1Choice: string
    player2Choice: string
    currentWinner: User

    constructor(
        sessionId: string,
        player1: User,
        player2: User,
        player1Choice: string,
        player2Choice: string,
        currentWinner: User
    ) {
        this.sessionId = sessionId
        this.player1 = player1
        this.player2 = player2
        this.player1Choice = player1Choice
        this.player2Choice = player2Choice
        this.currentWinner = currentWinner
    }

    // getters
    getSessionId(): string {
        return this.sessionId
    }
    
    getPlayer1(): User {
        return this.player1
    }

    getPlayer2(): User {
        return this.player2
    }

    getPlayer1Choice(): string {
        return this.player1Choice
    }

    getPlayer2Choice(): string {
        return this.player2Choice
    }

    getCurrentWinner(): User {
        return this.currentWinner
    }

    // setters

    setSessionId(sessionId: string) {
        this.sessionId = sessionId
    }

    setPlayer1(player1: User) {
        this.player1 = player1
    }

    setPlayer2(player2: User) {
        this.player2 = player2
    }

    setPlayer1Choice(player1Choice: string) {
        this.player1Choice = player1Choice
    }

    setPlayer2Choice(player2Choice: string) {
        this.player2Choice = player2Choice
    }

    setCurrentWinner(currentWinner: User) {
        this.currentWinner = currentWinner
    }

    // create a object of the session
    toObject() {      
        return {
            sessionId: this.sessionId,
            player1: this.player1,
            player2: this.player2,
            player1Choice: this.player1Choice,
            player2Choice: this.player2Choice,
            currentWinner: this.currentWinner
        }
    }

}
