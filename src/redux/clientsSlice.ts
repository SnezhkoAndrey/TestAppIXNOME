import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ClientsType } from "../types/types";

const initialState = {
  clients: [] as ClientsType[],
  searchingResult: [] as ClientsType[],
  term: "",
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClientsData: (state, action: PayloadAction<ClientsType>) => {
      state.clients.push(action.payload);
    },
    setIsOnlineData: (state, action: PayloadAction<string>) => {
      state.clients = changeIsOnline(state.clients, action.payload);
      state.searchingResult = changeIsOnline(
        state.searchingResult,
        action.payload
      );
    },
    setClientsSearchData: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.searchingResult = state.clients.filter(
          (client) =>
            // Used 3 search options because in terms of reference the fields: Client, Pickup Address, and in the design: Client, Courier
            client.client.includes(action.payload) ||
            client.pickup.includes(action.payload) ||
            client.courier.includes(action.payload)
        );
      } else {
        state.searchingResult = [];
      }
    },
    setTermData: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const {
  setClientsData,
  setClientsSearchData,
  setIsOnlineData,
  setTermData,
} = clientsSlice.actions;

export const selectClients = ({ clients }: RootState) =>
  clients.searchingResult.length ? clients.searchingResult : clients.clients;

export const selectTerm = ({ clients }: RootState) => clients.term;

const changeIsOnline = (clients: ClientsType[], id: ClientsType["id"]) => {
  return clients.map((client) => {
    if (client.id === id) {
      return { ...client, isOnline: !client.isOnline };
    } else {
      return client;
    }
  });
};

export default clientsSlice.reducer;
