import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { cartReducer } from "./slices/cartSlice";
import { ModesReducer } from "./slices/modesSlice ";
import { Sniper_RiflesReducer } from "./slices/Sniper_RiflesSlice";
import { Sub_Machine_GunsReducer } from "./slices/Sub_Machine_GunsSlice ";
import { Machine_GunsReducer } from "./slices/Machine_GunsSlice ";
import { AssaultRiflesReducer } from "./slices/AssaultRiflesSlice";
import { ShotgunsReducer } from "./slices/ShotgunsSlice";
import { PistolsReducer } from "./slices/PistolsSlice";
import { MeleeReducer } from "./slices/MeleeSlice";
import { GrenadesReducer } from "./slices/GrenadesSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        mode: ModesReducer,
        AssaultRifles: AssaultRiflesReducer,
        SniperRifles: Sniper_RiflesReducer,
        Sub_Machine_Guns: Sub_Machine_GunsReducer,
        Machine_Guns: Machine_GunsReducer,
        Shotguns: ShotgunsReducer,
        Pistols: PistolsReducer,
        Melee: MeleeReducer,
        Grenades: GrenadesReducer
    },
});
