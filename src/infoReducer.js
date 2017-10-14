const initialState = {
  room: '',
  name: '',
  otherPlayers: [], // {name, status}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'JOIN_ROOM':
      const newPlayers = [...state.otherPlayers, {name: action.name}];
      console.log(newPlayers);
      const newState = { room: action.room, name: action.name, otherPlayers: newPlayers };
      return { ...state, ...newState };
    default:
      return state;
  }
}
