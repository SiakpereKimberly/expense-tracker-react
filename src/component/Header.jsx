import useThemeStore from "../store/ThemeStore";
import { FaPalette } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const theme = useThemeStore(
    (state) => state.theme
  );

  const setTheme = useThemeStore(
    (state) => state.setTheme
  );

  const [showThemes, setShowThemes] = useState(false);

  return (
    <div className="relative p-4">
  <h2 className="text-3xl font-bold text-center">
    Expense Tracker
  </h2>

 <div className="absolute left-4 top-4">
  <button
    onClick={() => setShowThemes(!showThemes)}
  >
    <FaPalette className="cursor-pointer text-3xl" />
  </button>

  {showThemes && (
    <div className="mt-2 flex gap-2 rounded-lg bg-white p-2 shadow">
      <button
        onClick={() => setTheme("blue")}
        className="h-6 w-6 rounded-full bg-blue-500"
      />

      <button
        onClick={() => setTheme("green")}
        className="h-6 w-6 rounded-full bg-green-500"
      />

      <button
        onClick={() => setTheme("purple")}
        className="h-6 w-6 rounded-full bg-purple-500"
      />

      <button
        onClick={() => setTheme("orange")}
        className="h-6 w-6 rounded-full bg-orange-500"
      />

      <button
        onClick={() => setTheme("red")}
        className="h-6 w-6 rounded-full bg-red-500"
      />
    </div>
  )}
</div>
</div>
  );
};
export default Header;
