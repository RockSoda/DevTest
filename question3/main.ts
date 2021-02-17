export class Connect4 {
  matrix = [[]]
  player = -1
  isGameFinished = true

  constructor() {
    this.matrix = Array(6).fill(-1).map(() => Array(7).fill(-1))
    this.player = 2
    this.isGameFinished = false
  }

  switchPlayer() {
    if (this.player == 1) {
      this.player = 2
    } else {
      this.player = 1
    }
  }

  horizontalCheck(row: number) {
    let counter = 0
    for (let i = 0; i < this.matrix[row].length; i++) {
      if (this.matrix[row][i] != -1 && this.matrix[row][i] == this.player) {
        counter++
        if (counter == 4) return true
      } else {
        counter = 0
      }
    }
    return false
  }
  verticalCheck(col: number) {
    let count = 0
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][col] != -1 && this.matrix[i][col] == this.player) {
        count++
        if (count == 4) return true
      } else {
        count = 0
      }
    }
    return false
  }
  diagonalCheck(row: number, col: number) {
    let up = [this.matrix[row][col]]
    let down = [this.matrix[row][col]]

    let counter = 0

    let i = row
    let j = col
    while (i > 0 && j > 0) {
      i--
      j--
      down.unshift(this.matrix[i][j])
    }

    i = row
    j = col
    while (i < this.matrix.length - 1 && j < this.matrix[i].length - 1) {
      i++
      j++
      down.push(this.matrix[i][j])
    }

    for (let index = 0; index < down.length; index++) {
      if (down[index] != -1 && down[index] == this.player) {
        counter++
        if (counter == 4) return true
      } else {
        counter = 0
      }
    }

    i = row
    j = col
    while (i < this.matrix.length - 1 && j > 0) {
      i++
      j--
      up.unshift(this.matrix[i][j])
    }

    i = row
    j = col
    while (i > 0 && j < this.matrix[i].length - 1) {
      i--
      j++
      up.unshift(this.matrix[i][j])
    }

    counter = 0
    for (let index = 0; index < up.length; index++) {
      if (up[index] != -1 && up[index] == this.player) {
        counter++
        if (counter == 4) return true
      } else {
        counter = 0
      }
    }

    return false
  }

  isWinner(row: number, col: number) {
    return this.horizontalCheck(row) ||
      this.verticalCheck(col) ||
      this.diagonalCheck(row, col)
  }

  play(col: number): string {
    if (this.isGameFinished) return 'Game has finished!'
    this.switchPlayer()

    for (let i = this.matrix.length - 1; i >= 0; i--) {
      if (this.matrix[i][col] === -1) {
        this.matrix[i][col] = this.player

        if (this.isWinner(i, col)) {
          this.isGameFinished = true
          return `Player ${this.player} wins!`
        }

        return `Player ${this.player} has a turn`
      }
    }

    return 'Column full!'
  }
}