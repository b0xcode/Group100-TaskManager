# COMP2110 Task Manager 2024
- Testing out commit errors
As part of your assignment submission, write notes about your implementation
in this file.


## Ria's Sumbission

Initially, I added a js file for the game widget I was going to implement 
Test 1
another test
Test 2
test1
conflict
different test

HEllo my name is 


test 4

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