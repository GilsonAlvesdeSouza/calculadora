import React, { useEffect, useState } from "react";
import * as C from "./style"
import Input from '../Input';
import * as F from "../../helpers/formatValues";

const TipCalculator = () => {
    const [consumo, setConsumo] = useState<number>(0);
  const [porCentoGorjeta, setPorCentoGorjeta] = useState(10);
  const [gorjeta, setGorjeta] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (consumo > 0) {      
      let valorGorjeta = F.fixedDecimal((porCentoGorjeta / 100) * consumo, 2); 
      setGorjeta(valorGorjeta);
      let valorTotal = consumo + gorjeta;
      setTotal(valorTotal);
    }
    if (porCentoGorjeta === 0 || isNaN(porCentoGorjeta)) {
      setTotal(consumo);
    }
  }, [consumo, porCentoGorjeta, gorjeta]);

  const handleConsumo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let intConsumo = parseFloat(e.target.value);
    setConsumo(intConsumo);
  }

  const handlePorcentagemGorjeta = (e: React.ChangeEvent<HTMLInputElement>) => {
    let intGorjeta = parseFloat(e.target.value);
    setPorCentoGorjeta(intGorjeta);
  }

  return (
    

      <C.CalcArea>
        <C.CalcConteudo>
          <h1>Calculadora de Gorjetas</h1>
          <label htmlFor="">Quanto deu a conta? </label>
          <Input
            type="number"
            onChange={handleConsumo}
            defaultValue={consumo}
          />
          <label htmlFor="">Qual a porcentagem da gorjeta? </label>
          <Input
            type="number"
            onChange={handlePorcentagemGorjeta}
            defaultValue={porCentoGorjeta}
          />

        </C.CalcConteudo>

        <C.AreaConteudo>
          <C.InfoConteudo>
            {consumo > 0 &&
              <>
                <p>Sub-total: {consumo > 0 ? F.formattedCurrency(consumo) : "0,00"}</p>
                <p>
                  Gorjeta ({isNaN(porCentoGorjeta) ? "0" : porCentoGorjeta}%): {gorjeta > 0 ? F.formattedCurrency(gorjeta) : "0,00"}
                </p>
                <h3>Total: {F.formattedCurrency(total)}</h3>
              </>
            }
          </C.InfoConteudo>
        </C.AreaConteudo>
      </C.CalcArea>
    
  );
};

export default TipCalculator;