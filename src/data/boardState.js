/**
 * This holds the state of the wordle board
 * the first set of element represents a row in the board
 * the elements inside of the row represent the state of the 
 * letter and the letter itself. Each letter is represented 
 * by an object that has two properties letter, which is the 
 * letter and letterState which means the current state of the letter
 */
 import { v4 as uuidv4 } from 'uuid';

 export const LETTER_STATE = {
    unselected: 0,
    correct: 1,
    incorrectSpot: 2,
    wrong: 3,
    placed: 4

}


const BOARD_STATE = [
    [
        { id: 1, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 2, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 3, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 4, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 5, letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: 6, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 7, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 8, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 9, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 10, letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: 11, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 12, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 13, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 14, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 15, letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: 16, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 17, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 18, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 19, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 20, letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: 21, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 22, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 23, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 24, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 25, letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: 26, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 27, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 28, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 29, letter: "", letterState: LETTER_STATE.unselected}, 
        { id: 30, letter: "", letterState: LETTER_STATE.unselected}, 
    ],
]

export default BOARD_STATE;