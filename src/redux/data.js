import { createSlice } from "@reduxjs/toolkit";
export const addressSlice = createSlice({
    name: "address",
    initialState: {
        waddress: "",
        walletname: "Metamask",
        walletModal: false,
        networkModal: false,
        networkName: "",
        tokenName: "",
        symbol: ""

    },
    reducers: {
        setaddress: (state, action) => {
            state.waddress = action.payload;
        },

    },
    setwalletname: (state, action) => {
        state.walletname = action.payload;
    },
    setwalletmodal: (state, action) => {
        state.walletModal = action.payload;
    },
    setNetworkmodal: (state, action) => {
        state.networkModal = action.payload;
    },
    setNetworkName: (state, action) => {
        state.networkName = action.payload;
    },
    setTokenName: (state, action) => {
        state.tokenName = action.payload;
    },
    setSymbol: (state, action) => {
        state.symbol = action.payload
    }

},
);

// Action creators are generated for each case reducer function
export const {
    setaddress,
    setCheckBox,
    setwalletname,
    setwalletmodal,
    setNetworkmodal,
    setNetworkName,
    setTokenName,
    setSymbol


} = addressSlice.actions;

export default addressSlice.reducer;