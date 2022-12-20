import "./styles.css";

export const Menu = () => {

    return (
        <div className="hidden sm:block">
            <div className="flex flex-row items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                    <a href="/">M</a>
                </button>
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                    <a href="/about">Acerca de mi</a>
                </button>
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                    <a href="/proyectos">Proyectos</a>
                </button>
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                    <a href="https://twitter.com/miguelgargallo" target="_blank" rel="noreferrer"
                    >Twitter</a>
                </button>
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                    <a href="https://github.com/miguelgargallo" target="_blank" rel="noreferrer"
                    >Github</a>
                </button>
            </div>
        </div>
    );
};