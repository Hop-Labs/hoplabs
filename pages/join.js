import MainNav from "./nav";
import Footer from "./footer";

export default function Join() {
  return (
    <div>
      <MainNav />
      <div className="text-center items-center py-10">
        <h1 className="text-3xl font-bold font-serif">Ready to Join?</h1>
        <p className="text-xl pt-5 md:px-96">
          Interested in adding your project to the list? Fill out the form
          below!
        </p>
        <iframe
          className="w-screen h-screen"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfYXjcdGOK2p6rc4cuySaKEwxt4ONvueOEu-1VIqkj6Us_rOg/viewform?embedded=true"
          width="640"
          height="1000"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
