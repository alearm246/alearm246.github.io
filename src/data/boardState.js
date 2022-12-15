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
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
    ],
    [
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
        { id: uuidv4(), letter: "", letterState: LETTER_STATE.unselected}, 
    ],
]

export default BOARD_STATE;