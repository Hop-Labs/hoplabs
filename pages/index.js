// import styles from "../styles/global.css";
import MainNav from "./nav";

export default function Home() {
  return (
    <div className="h-screen w-screen p-10 dark:bg-gray-900 bg-indigo-200">
      <MainNav />
      <main className="items-center py-10">
        <h1 className="text-3xl font-bold"> Hello world! </h1>
      </main>
      <footer className=""></footer>
    </div>
  );
}
