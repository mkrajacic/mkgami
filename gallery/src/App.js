import React from "react";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <svg
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" />
          <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" />
          <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
        </svg>
        Origami fotografija
        <svg
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" />
          <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" />
          <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
        </svg>
      </h1>
      <p className="pre-desc">
        Projekt se sastoji od 12 fotografija modela dobivenih presavijanjem
        papira. Origami model u svakoj od fotografija izrađen je od strane samog
        autora, koristeći papir namijenjen za izradu origami modela. Fotografije
        su tematski podijeljene u dva dijela.
        <br />
        <br />
        Realnost i stvarnost koju je kreirao autor. Unutarnji svijet i "prava"
        stvarnost. Bojama je jasno istaknuta razlika.
      </p>
      <h1 className="part-title">Prvi dio: izdvajanje iz cjeline</h1>
      <p className="part-desc">
        Origami modeli u ovih 6 prizora su "neobični" te "drugačiji" od ostalih
        elemenata unutar fotografije. Žive u svojem svijetu, ali unatoč tome
        ukomponirani su u cjelinu. Po karakteristikama su različiti od ostalih,
        ali neki svejedno mogu služiti kao objekti iz čije cjeline su izdvojeni.
        Unutar omota moguće je staviti bombon, figuru je moguće koristiti za
        društvenu igru, te je posudu moguće koristiti za primjerice grickalice.
      </p>
      <Gallery startFrom={1} endAt={6} />
      <h1 className="part-title">Drugi dio: komponiranje realnosti</h1>
      <p className="part-desc">
        U idućih 6 fotografija origami modelima je komponirana, ili kreirana
        stvarnost. Kreirani su trenuci koje je moguće vidjeti u "pravoj"
        stvarnosti. Ili trenuci u kojima su "prava" stvarnost i dio stvarnosti
        kreiran od strane autora postavljeni u kontrast.
      </p>
      <Gallery startFrom={7} endAt={12} />
      <h3 style={{ textAlign: "center" }}>
        Digitalna fotografska produkcija, Diplomski studij Multimedija,
        Sveučilište Sjever
      </h3>
      <h2 style={{ textAlign: "center" }}>@MK 2022</h2>
    </>
  );
}

export default App;
