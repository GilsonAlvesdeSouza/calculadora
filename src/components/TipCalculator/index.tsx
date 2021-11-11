import React, { useEffect, useState } from "react";
import * as C from "./style"
import Input from '../Input';
import * as F from "../../helpers/formatValues";

const TipCalculator = () => {
  const [consumption, setConsumption] = useState<number>(0);
  const [percentTip, setPercentTip] = useState(10);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (consumption > 0) {
      let valorGorjeta = F.fixedDecimal((percentTip / 100) * consumption, 2);
      setTip(valorGorjeta);
      let valorTotal = consumption + tip;
      setTotal(valorTotal);
    }
    if (percentTip === 0 || isNaN(percentTip)) {
      setTotal(consumption);
    }
  }, [consumption, percentTip, tip]);

  const handleConsumo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let intConsumo = parseFloat(e.target.value);
    setConsumption(intConsumo);
  }

  const handlePorcentagemGorjeta = (e: React.ChangeEvent<HTMLInputElement>) => {
    let intGorjeta = parseFloat(e.target.value);
    setPercentTip(intGorjeta);
  }

  return (
    <C.CalcArea>
      <C.ContentCalc>
        <h1>Calculadora de Gorjetas</h1>
        <label htmlFor="">Quanto deu a conta? </label>
        <Input
          type="number"
          onChange={handleConsumo}
          defaultValue={consumption}
        />
        <label htmlFor="">Qual a porcentagem da gorjeta? </label>
        <Input
          type="number"
          onChange={handlePorcentagemGorjeta}
          defaultValue={percentTip}
        />

      </C.ContentCalc>

      <C.ContentArea>
        <C.ContentInfo>
          {consumption > 0 &&
            <>
              <p>Sub-total: {consumption > 0 ? F.formattedCurrency(consumption) : "0,00"}</p>
              <p>
                Gorjeta ({isNaN(percentTip) ? "0" : percentTip}%): {tip > 0 ? F.formattedCurrency(tip) : "0,00"}
              </p>
              <h3>Total: {F.formattedCurrency(total)}</h3>
            </>
          }
        </C.ContentInfo>
      </C.ContentArea>
    </C.CalcArea>
  );
};

export default TipCalculator;