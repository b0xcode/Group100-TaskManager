# Final Report: Deployment and Web Application Analysis


## Details of Deployment and URL where application can be accessed:

The deployment of the URL of our web application was accomplished through the Cloudflare service provider. The following steps, underscore the methodology used to deploy our web application:

1. Firstly, we created logged into the Cloudflare dashboard by creating an account on Cloudflare Pages.
2. Secondly, from the sidebar we selected "Workers & Pages", then selected the "Build an application" tab and then clicked on the "Pages" tab.
3. Within the Pages tab, we selected the choice to "connect to Git":

![image](https://github.com/MQCOMP2110-2024/web-development-project-group-100/assets/141375524/cc006228-73f5-4d29-a6d7-cd6817b0f610)





5. Upon selecting the "Connect to Github" notice, we were given the option to select in which organisation we would prefer to install Cloudflare and we selected the organisation of "MQCOMP2110-2024":

![image](https://github.com/MQCOMP2110-2024/web-development-project-group-100/assets/141375524/8dc907a5-bf18-4829-8613-b75d239fa35e)

6. Next, we were asked to select from the available repositories and we selected our private group repository of "MQCOMP2110-2024/web-development-project-group-100":

![image](https://github.com/MQCOMP2110-2024/web-development-project-group-100/assets/141375524/3e6d79a7-fca3-4b90-9c87-8e3fad161c6c)


  
7. 



## Group Achievements:

Each widget undeniably contributed to the harmony and prepossessing design of the user interface of our task manager application. Our game widget engaged users and acted as a medium of fun for users enhancing their task management experience to a more interactive and enjoyable one. Specifically the Tic Tac Toe game widget acts as a break from the mundane routine of managing tasks, rewarding users and thus, encouraging them to stay productive by taking task management more light-heartedly whilst also enjoying a quick game of Tic Tac Toe from time to time. Overall, the achievement with the creation of  a game widget is the provision of an entertaining distraction, alleviating the stress of users and enhancing their focus when returning to the fulfillment of their tasks. Moreover, the light blue, light red and white colour scheme of the game widget was purposeful in harmonising with the modern and minimilistic background image and task card design. Our mood widget .......... Our task summary widget ........ Our Calendar widget......

## Challenges encountered:

### Structural challenges:

Structural challenges were also omnipresent upon completing the task manager application. Initially, the greatest challenge faced with the group members was the synchronisation of alterations to the project between the local repository and the remote repository of GitHub. It was initially complex to wrap our heads around the push and pull processes. However, we managed to resolve this challenge by selecting source control on VS, writing and commiting a comment on the tab of the source control, selecting the ellipsis in source control, selecting "open more option" and then clicking on "push". These completed the 'push' and delivered existing local changes to the GitHub repository. The pull commit was less intricate, involving selecting the "pull" tab on GitHub which fetches these delivered changes from the local repository and merges them into out "main" branch. Although, the process was tedious we all managed to successfully push and pull changes into our "main" branch, resulting in our updated. Additionally, another structural challeng was deciphering the final "css" design and on an overall colour scheme of our individual widgets so that we would generate a visually harmonious user interface. 



### Organisational challenges:

The organisational challenges during the process of creating the task manager application were inevitable. Communication and assignment of tasks was initially difficult as we had to select a media platform that everyone was familiar as well as comfortable with. Collectively, we all opted for the use of discord as the medium aiding our communication. However, discord possessed two limitations; it is typically installed/used via a desktop which we infrequently use in comparison to mobiles and notifications on discord are not visible if it's not installed as a desktop app. These two limitations transpired in us experiencing a delay within our communication, as different group members would view the message at different days (refer to Appendix). Nonetheless, on the flipside, this wasn't a profound issue as we were able to communicate in person via our scheduled SGTA classes. Additionally, another paramount challenge encountered by all group members was performing efficient time management by balancing the creation of their widget/task cards with other units studied during the semester. In particular, this was challenging due to the fact that we were all full time students, hence we were also required to concentrate our focus on our remaining 3 other units. In retrospect, our collaboration was successful as we were all responsible in completing our assigned widgets in accordance with the deadline. 


## Key Rewards: Personal Contributions to Understanding Unit Content:

### Things that contributed to my understanding of the unit (Ria)

Designing the Tic Tac Toe game widget was undeniably rewarding in enabling me to consolidate my comprehension of the COMP2110 unit. Firstly, I fortified my Javascript skills by employing the functions critical for the operation of the game, such as managing the Game result (via the ManagingGameResult()), announcing the game outcome on the UI (via CallerOf()), resetting the game frame (resetGameFrame()) as well as controlling the player's turn and user inputs (via GamerMoves(grid, index) and ChangeGamer()). The game logic and utilisation of Javascript functions were paramount in ensuring that all potential win, draw and loss conditions were correctly executed and displayed on the game board. 

Furthermore, the incorporation of Lit into my individually written code enhanced my understanding of unit content employing Lit to write and structure web components (taught throughout the course of the unit). Within my game widget, Lit Framework enabled me to condense my game widget's stylistic elements (css), logic and functionality (js) as well as structure (HTML) into a singular reusable component. Firstly, within my game widget I imported the LitElement framework via "import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';". The importation of Lit enabled me to utilise Lit's html` and static style css` tags within the JS, game-widget.js file (see screenshots below) which enabled me to render the game UI and dynamic updates to the DOM as well as design the game's stylistic elements, respectively. My use of the Lit Element framework not only aided me in designing a modular and reusable web component but also ameliorated my hands-on experience in creating a functional and interactive task manager application. 

![image](https://github.com/MQCOMP2110-2024/web-development-project-group-100/assets/141375524/c62a3553-16c1-4752-b6f8-d7d05537e1dd)

![image](https://github.com/MQCOMP2110-2024/web-development-project-group-100/assets/141375524/4dfe59c8-dc38-4371-8c77-226af00bf71a)


![image](https://github.com/MQCOMP2110-2024/web-development-project-group-100/assets/141375524/23d13a1f-782a-43ff-a571-5f887b25bb40)



## Individual Reflections:

### Ria's Individual Reflection:

#### Why Widget was chosen?

The widget I chose for the task manager application was the game widget. Specifically, I created a Tic Tac Toe game widget.  I chose the game widget due it's high complexity as I wanted to challenge myself with the logic and general thinking involved within game development. I also wanted to delve more thoroughly into the whole process of game design (through the use of css) which was intricate as with designing a game - the most diminutive details - such as the game button do need to be designed in harmony with the rest of the game user interface, to create an appealing game interface. 

#### Most challenging aspect of the project?

Since Tic Tac Toe has multiple combinations that could result in both the X and O players in winning, tying or losing, the most challenging aspect of the project was creating an array for all the possible combinations for the game outcomes (win, tie, lose). The process was profoundly tedious as I had to identify and consider all available win conditions within the standard Tic Tac Toe 3x3 grid and subsequently, create an array that controls all the "win" combinations present within the game. I had to approach the multi-dimensional array as a means of representing the user interface of the Tic Tac Toe game box. I had to map and categorise the win conditions and represent them using the array indices. The challenging aspect was not merely the creation of the array, but also the fact that I had to state the array indices that would potentially generate a horizontal win, vertical win or diagonal win in the board. The horizontal wins were consituted by the following indices: [0, 1, 2], [3, 4, 5], [6, 7, 8]. The vertical wins were generated by the following index combinations:  [0, 3, 6], [1, 4, 7], [2, 5, 8]. Lastly, the diagonal wins were generated by these combinations: [0, 4, 8], [2, 4, 6]. Another intricate aspect of the game board was correlating the array indices to the cells of the game board. The array index numbers represented a game board cell that ranged from 0 to 8 as there are nine cells, from left to right and top to bottom. My final array with the combinations for gaining a victory in the game was successfully crafted as showcased below:

 const victoryRequirements = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];



### Francine Morales Individual Reflection:

Chosen the Mood Widget due to it's simplicity to create and implement. The most challenging part of the project was doing the widget, I had trouble on getting the eventListeners to activate the desired function. I solved this by re-reading the course notes and rewatching the short videos of the Javascript modules to further understand on how the functions works and how to implement it.


