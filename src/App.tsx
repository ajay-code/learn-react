import { Outlet, RouterProvider } from "react-router-dom";

import { router } from "./router";

export function Layout() {
    return (
        <div className="mx-auto max-w-3xl">
            <Outlet />
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
