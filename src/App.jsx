import { useState, useEffect } from "react";
import JSConfetti from 'js-confetti';
//import './App.css';
import './styles.css';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});
  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45);
  const [valueSi, setValueSi] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true); // Nuevo estado para controlar la visualización del texto inicial
  const [showName, setShowName] = useState(true); // Nuevo estado para controlar la visualización del nombre
  const [showMessage, setShowMessage] = useState(false); // Nuevo estado para controlar la visualización del mensaje
  const [showConfirmation, setShowConfirmation] = useState(false);

  // useEffect(() => {
  //   // Esconder el mensaje inicial después de 3 segundos
  //   const timer = setTimeout(() => {
  //     setShowInitialText(false);
  //   }, 7000);

  //   // Limpiar el temporizador cuando el componente se desmonta o se actualiza
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    // Temporizador para ocultar el nombre después de 3 segundos
    const nameTimer = setTimeout(() => {
      setShowName(false);
    }, 3000);

    // Temporizador para mostrar el mensaje después de 3 segundos
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    // Temporizador para ocultar el mensaje después de 6 segundos
    const hideMessageTimer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);

    // Temporizador para ocultar el texto inicial después de 6 segundos
    const hideInitialTextTimer = setTimeout(() => {
      setShowInitialText(false);
    }, 10000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(messageTimer);
      clearTimeout(hideMessageTimer);
      clearTimeout(hideInitialTextTimer);
    };
  }, []);

  const random = [
    {
      id: 1,
      description: "Deci que si",
      img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
    },
    {
      id: 1,
      description: "Pensalo de nuevo.",
      img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif"
    }
      ,
    {
      id: 2,
      description: "Vamos, no podes decir que no.",
      img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif"
    },
    {
      id: 3,
      description: "Yo invito, aprovecha que siempre estoy pobre menos ese dia.",
      img: "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif"
    },
    {
      id: 4,
      description: "Va a ser chilero.",
      img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif"
    },
    {
      id: 5,
      description: "Te voy a dejar despues de comer.",
      img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif"
    },
    {
      id: 6,
      description: "Te voy a traer si queres.",
      img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif"
    },
    {
      id: 7,
      description: "No tenes nada mejor que hacer.",
      img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
    },
    {
      id: 8,
      description: "Mira que hasta una pagina te hice 🤑.",
      img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif"
    },
    {
      id: 9,
      description: "Confía en mí.",
      img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
    },
    {
      id: 10,
      description: "No te arrepentirás.",
      img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif"
    }
  ];

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index]);
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10);
    }
    setRandomValor(random[index]);
  };

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      <div className={`p-5 mt-20 ${showName ? 'fade-in' : 'fade-out'}`}>
        {showName && (
          <h1 className="text-white font-bold text-5xl text-center">Madeline</h1>
        )}
      </div>

      {showMessage && (
        <div className={`p-5 ${showMessage ? 'fade-in' : 'fade-out'}`}>
          <p className={`text-white text-lg text-center ${showMessage ? '' : 'hidden'}`}>Como los regalos este día están bien caros y todavía no han pagado 😕 y aprovechando que soy un genio 😎...</p>
          <p className={`text-white text-lg text-center ${showMessage ? '' : 'hidden'}`}>Aquí está tu carta del 14 🤗</p>
          <br />
          <p className={`text-white text-g text-center ${showMessage ? '' : 'hidden'}`}>PD: si está algo culeron es que lo hice en una hora, pero con todo el cariño, jajajajajajaj</p>
        </div>
      )}

      {!showInitialText && !showConfirmation && (
        <div className="p-5">
          <h1 className="text-white font-bold text-5xl text-center">¿Vamos a comer el otro viernes 23?</h1>
          <p className="text-white text-g text-center">Ese día ya hay pisto 🤑</p>
          <img src={Object.keys(randomValor).length === 0 ?
            "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" : randomValor.img} alt="San Valentín" className="mx-auto" width={400} height={400} />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button onClick={() => {
              setValueSi(true);
              jsConfetti.addConfetti({
                emojis: ['😍', '🥰', '❤️', '😘'],
                emojiSize: 70,
                confettiNumber: 80,
              });
              handleConfirmation(); // Llamar a la función handleConfirmation al hacer clic en el botón "Sí"
            }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
              Sí
            </button>
            <button
              className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
              onClick={randomResponse}
              disabled={imagenCargada}
            >
              {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
            </button>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl text-white font-bold">¡Sabía que dirías que sí! ❤️</h1>
          <p className="text-2xl text-white font-bold">Ahora vos pones la hora</p>
          <img src="https://i.pinimg.com/564x/95/f2/1a/95f21a926b856bc72b1ea5abbab231fd.jpg" alt="" className="mx-auto" />
          <p className="text-2xl text-white font-bold">Hay me mandas captura de lo elegiste y a donde queres ir a comer</p>
          <span hidden>{document.title = '¡Sabía que dirías que sí! ❤️'}</span>
        </div>
      )}
    </main>
  );
}

export default App;
