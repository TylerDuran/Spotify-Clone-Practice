export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: null,
    // token: "a78ebd103b76434a9ec0fae1d1d645ab"
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DANCE_PARTY':
            return {
                ...state,
                dance_party: action.dance_party,
            };

        default:
            return state;


    }
}

export default reducer;