import initState from '../json/init.json'

const MAPPING = {
    TITLE: ['title'],
    SUBTITLE: ['subtitle'],
    IMG_SRC: ['img', 'src'],
    IMG_NAME: ['img', 'name'],
    IMG_DESC: ['img', 'description'],
    TEXT_NAME: ['text', 'name'],
    TEXT_TEXT: ['text', 'text']
}

const reducer = (state = initState, action) => {
    if(Object.keys(MAPPING).includes(action.type)) {
        let changedState =  {
            cards: [...state.cards]
        };
        let element = null;
        let card = changedState.cards[action.cardID-1];

        if (MAPPING[action.type].length > 1) {
            element = card.elements
                .find((obj) => {
                    return obj.type === MAPPING[action.type][0]});
            element[MAPPING[action.type][1]] = action.value;
        } else {
            card[MAPPING[action.type][0]] = action.value;
        }

        return {
            ...state,
            ...changedState
        }
    }
    return state;
}

export default reducer;