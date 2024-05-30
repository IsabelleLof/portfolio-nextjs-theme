import { useTheme } from "./ThemeContext";

function Theme_Toggle() {
  const { state, dispatch } = useTheme();

  return (
    <div className="dark: dark:bg-gray-800 dark:text-gray-300">
      {state.theme === "dark" ? (
        <button
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              theme: "light",
            });
          }}
        >
          Lightmode
        </button>
      ) : (
        <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              theme: "dark",
            });
          }}
        >
          Darkmode
        </button>
      )}
    </div>
  );
}
export default Theme_Toggle;
