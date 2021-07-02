import {INC_CUS, INC, RESET, DEC, INC2, DEC2, RESET2, INC_CUS2} from "../action-types";

const incCusAction = (payload) => ({type: INC_CUS, payload})
const incAction = () => ({type: INC})
const decAction = () => ({type: DEC})
const resAction = () => ({type: RESET})

const incCusAction2 = (payload) => ({type: INC_CUS2, payload})
const incAction2 = () => ({type: INC2})
const decAction2 = () => ({type: DEC2})
const resAction2 = () => ({type: RESET2})

export {
    incCusAction,
    incAction,
    decAction,
    resAction,
    incCusAction2,
    incAction2,
    decAction2,
    resAction2
}
