import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./App";
import { Index } from "./pages/Index";
import { PokemonDetail } from "./pages/PokemonDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Index /> },
            { path: "pokemon/:id", element: <PokemonDetail /> },
        ],
    },
]);
