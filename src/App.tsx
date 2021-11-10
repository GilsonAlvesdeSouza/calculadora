import { useEffect, useState } from "react";
import * as C from "./App.style"
import Input from './components/Input';

const App = () => {
  const [consumo, setConsumo] = useState("0");
  const [porCentoGorjeta, setPorCentoGorjeta] = useState("10");
  const [gorjeta, setGorjeta] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (parseInt(consumo) > 0) {
      let valorGorjeta = (parseInt(porCentoGorjeta) / 100) * parseInt(consumo);
      setGorjeta(valorGorjeta);
      let valorTotal = parseInt(consumo) + gorjeta;
      setTotal(valorTotal);
    }
    if (parseInt(porCentoGorjeta) === 0 || porCentoGorjeta === '') {
      setTotal(parseInt(consumo));
    }
  }, [consumo, porCentoGorjeta, gorjeta]);

  const handleConsumo = (e: any) => {
    setConsumo(e.target.value);
  }

  const handlePorcentagemGorjeta = (e: any) => {
    setPorCentoGorjeta(e.target.value);
  }

  return (
    <C.Container>

      <C.CalcArea>
        <C.CalcConteudo>
          <h1>Calculadora de Gorjetas</h1>
          <label htmlFor="">Quanto deu a conta? </label>
          <Input
            type="number"
            onChange={(e) => handleConsumo(e)}
            defaultValue={consumo}
          />
          <label htmlFor="">Qual a porcentagem da gorjeta? </label>
          <Input
            type="number"
            onChange={(e) => handlePorcentagemGorjeta(e)}
            defaultValue={porCentoGorjeta}
          />

        </C.CalcConteudo>

        <C.AreaConteudo>
          <C.InfoConteudo>
            {parseInt(consumo) > 0 &&
              <>
                <p>Sub-total: R$ {parseInt(consumo) > 0 ? consumo : "0,00"}</p>
                <p>Gorjeta ({porCentoGorjeta}%): R$ {gorjeta > 0 ? gorjeta : "0,00"}</p>
                <h3>Total: R$ {total}</h3>
              </>
            }
          </C.InfoConteudo>
        </C.AreaConteudo>
      </C.CalcArea>
    </C.Container>
  );
};

export default App;