# COMP2110 Task Manager 2024
- Testing out commit errors
As part of your assignment submission, write notes about your implementation
in this file.


## Ria Karakasis Contribution Notes

### Creating the Tic Tac Toe, game-widget.js

Initially, I created a file named game-widget.js and made it the designated file for all my css, js and html code related to the game widget. 


I connected my game-widget.js into the web application by importing it to the main.js file utilising 'import './components/game-widget.js';' at the beginning of the main.js file. Then, I included the '<game-widget></game-widget>', within the <main> component of the main.js file so that the game widget - alongside other widgets - is displayed on the main user interface of our task manager application.  

### Importation of LitElement framework 

Within my game-widget.js file I imported the LitElement, css and html framework by utilising:

"import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';"

The rationale behind the implementation of LitElement was as follows:

- It enabled me to define HTML components within a JS file. In my game-widget.js code I utilised a 'render()' that incorporates Lit HTML to establish the user interface of my Tic-Tac-Toe game. 
- It enabled me to employ my CSS through the shadow DOM, preventing my CSS from overflowing onto other elements of the task manager application. 

### Writing out my static properties/Game Variables

These are all the static properties I inlcuded relevant to my game widget:

 static properties =  {
    GamerPlaying: { type: String },
    GameFrame: { type: Array },
    GameStatus: { type: Boolean }
  };

  The static properties state the game variables:
  - GamerPlaying variable: Takes a string 'X' or 'O' which represents the person playing.
  - GameFrame: An array that represents the game grid boxes that make up the game board/frame.
  -GameStatus: A boolean that represents whether the game is in action or not.

### Adding my CSS into my widget-game.js

I entered my css code within my widget-game.js. My CSS code comprised of the following:

- The grid,
- The colour andd font of the GamerB and GamerA display, 
- The colour and aesthetic of the restart button, - The colour of the board's background,
- The title font size,
- The margin of the board display,
- The height and width of the grid columns and rows,
- etc.
  
### Adding my ManagingGameResult() function:

I added my ManagingGameResult() function within the game-widget.js file. This function is responsible for the following:

- the const victoryRequirements (taken from third party code sourced in the last section) outlines all the possible combinations of positions on the Tic Tac Toe game board that would transpire in a victory.
- Next the 'for' loop iterates over these requirements, returning the 'X' or 'O' symbol of the player that occupies the successful combinations or a tie if no winning requirements are met. However, if no win or tie occurs then 'null' is returned signalling that the game status is still active. 


### Adding my CallerOf() function:

The CallerOf() function added to my game-widget.js file is responsible for altering the user interface of the game-widget to showcase the outcome of the game. This is how the 'switch' statement within this function accomplishes this:

- If the outcome is 'X' - meaning the gamer with the 'X' symbol won the game -> resultCaller announces that "Gamer X won".
- If the outcome is 'O' - meaning the gamer with the 'O' symbol won the game -> resultCaller announces that "Gamer O won".
- If the outcome is 'Tie' -> resultCaller announces that "It's a tie".

### Adding my MoveChecker(grid) function:

This function is responsible for checking whether a game move within the game is valid. It takes grid as the parameter (which represents a grid box within the board) and returns true if a move is valid, signalling that the cell as of now is unoccupied (as innerText does not encompass 'X' or 'o') and the game is ongoing if this.GameStatus is true. If the grid is empty and is neither occupied by 'X' or 'O' then the gamer can make a move and vice versa.


### Adding my GamerMoves(grid, index) function:

This function takes the primary role of managing the moves of the gamers 'O' and 'X'. These are the elements that aid in achieving the management of Player moves:

- The parameters are 'grid' (grid is the squares where the 'X' and 'O' moves are made on the board) and 'index' (signals the index of the grid squares).
- Firstly, the MoveChecker(grid) function checks if a player makes an undoable move (if the grid box is already occupied by either 'X' or 'O'). If the box is occupied the function just exits. 
- If the move is doable (the grid box is empty) then the grid box is altered with the player's symbol (this.GamerPlaying) either 'X' or 'O', when the player makes their move. The GameFrame array is also accordingly updated to show the change ('X' or 'O') on the board.
- Upon the move, the ManagingGameResult() function is called to determine whether the game is a win or a tie. If it's a win the CallerOf() function is called to showcase the game result and the Game Status is fixed to 'false' to signal the termination of the game.
- If the Game has not yet ceases, this.GamePlaying is altered to the Gamer next in line ('O' is changed to 'X' and vice versa) and the user interface is upgraded to show the change via the ChangeGamer() element. 

### Adding my resetGameFrame() function:

The resetGameFrame() function is responsible for reseting the Game, so that a new game with an empty grid frame arises. This is achieved through the following:

-through "this.GameFrame = ['', '', '', '', '', '', '', '', ''];", the grid array is set to be empty.
- Game status is written to be true so that the game is ongoing. Then GamerPlaying is written to 'X', meaning Gamer X will initiate the game.
- Through 'querySelectorAll('.grid'), the grid is derived from the shadow DOM. Then, it goes through each grid component (grid box visible on the board), removing any text within each of these components and thus designating the grid cells to be empty.
- 'DONTSHOW' is inserted within the  'resultCaller' class to conceal the previous Game outcome. 









## Marlon Ruiz Diaz Contribution Notes
### CSS Implementation
I copied my CSS from Assignment 1 to style the website

### Extending task-card.js
#### Hover box
- Used -webkit-line-clamp to limit task content display to two lines
- Added a content-hover div to contain the full text of the task content, which defaults to display:none
- Added mouseenter and mouseleave event listeners
- Added the function _ContentHoverEnter which is called by mouseenter and checks for if the task content is clamped by webkit-line-clamp by comparing scrollHeight property to clientHeight property. If the content is found to be truncated, then the the content-hover div is set to display:block so the full task content can be viewed
- Added the function _ContentHoverLeave which is called by the mouseleave event listener to reset the content-hover div back to display:none