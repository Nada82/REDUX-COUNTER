import{ADDING, REMOVING} from './actionsTypes';

 function add (paylaod){
    return {type: ADDING, paylaod}
}


 function remove (paylaod){
    return {type: REMOVING, paylaod}
}

export {add, remove};