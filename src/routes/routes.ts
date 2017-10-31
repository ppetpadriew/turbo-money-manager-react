interface IRouter {
    name: string;
    path: string;
}

const routes: IRouter[] = [
    {name: "home", path: "/"},
    {name: "test", path: "/test"}
];

export default routes;