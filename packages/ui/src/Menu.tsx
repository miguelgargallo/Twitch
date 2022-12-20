import "./styles.css";

export const Menu = () => {

    return (
        <div className="hidden sm:block">
            <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800">
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                    <a href="/what-is-pylar">Acerca de mi</a>
                </button>
            </div>
        </div>
    );
};