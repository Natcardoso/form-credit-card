import React, { useRef, useState } from "react";
import * as s from "./style";
import { ReactComponent as Chip } from "./img/chip.svg";
import { ReactComponent as Mastercard } from "./img/mastercard.svg";
import Select from "react-select";
import InputMask from "react-input-mask";
import backgroundCard from "./img/fundo-card.svg";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

interface Props {
    toggleTheme: () => void;
}

export const Form = ({ toggleTheme }: Props) => {
    const optionsMonth = [
        { value: "01", label: "01" },
        { value: "02", label: "02" },
        { value: "03", label: "03" },
        { value: "04", label: "04" },
        { value: "05", label: "05" },
        { value: "06", label: "06" },
        { value: "07", label: "07" },
        { value: "08", label: "08" },
        { value: "09", label: "09" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
    ];

    const optionsYears = [
        { value: "20", label: "20" },
        { value: "21", label: "21" },
        { value: "22", label: "22" },
        { value: "23", label: "23" },
        { value: "24", label: "24" },
        { value: "25", label: "25" },
        { value: "26", label: "26" },
        { value: "27", label: "27" },
        { value: "28", label: "28" },
        { value: "29", label: "29" },
        { value: "30", label: "30" },
    ];
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [monthValid, setMonthValid] = useState<string | undefined>();
    const [yearsValid, setYearsValid] = useState<string | undefined>();
    const [cvv, setCvv] = useState("");
    const inputCvv = useRef<HTMLInputElement>(null);
    const [flipCard, setFlipCard] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleOnFocus = () => {
        setFlipCard(true);
    };

    const handleOnBlur = () => {
        setFlipCard(false);
    };

    return (
        <s.Container>
            <s.BoxContent>
                <s.Switch>
                    <input
                        id="checkbox"
                        type="checkbox"
                        onChange={() => toggleTheme()}
                    />
                    <label htmlFor="checkbox">
                        <RiSunFill className="sun" />
                        <RiMoonClearFill className="moon" />
                        <div className="ball"></div>
                    </label>
                </s.Switch>
                <s.DivCard>
                    <s.FlipContainer>
                        <s.Flip
                            className="flipper"
                            id={flipCard ? "active" : ""}
                        >
                            <s.CreditCardFront
                                className="flipFront"
                                style={{
                                    backgroundImage: ` url(${backgroundCard})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div>
                                    <Chip />
                                    <Mastercard />
                                </div>
                                <s.NumberCard>
                                    {number
                                        ? number
                                        : "0000   0000   0000   0000"}
                                </s.NumberCard>
                                <div>
                                    <span>{name}</span>
                                    <span>
                                        {monthValid && yearsValid
                                            ? `${monthValid}/${yearsValid}`
                                            : "00/00"}
                                    </span>
                                </div>
                            </s.CreditCardFront>
                            <s.CreditCardBack
                                className="flipBack"
                                style={{
                                    backgroundImage: ` url(${backgroundCard})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div></div>
                                <div>
                                    <span style={{ color: "#111" }}>
                                        {cvv ? cvv : "000"}
                                    </span>
                                </div>
                                <div>
                                    <Mastercard />
                                </div>
                            </s.CreditCardBack>
                        </s.Flip>
                    </s.FlipContainer>
                </s.DivCard>
                <s.Form onSubmit={handleSubmit}>
                    <span className="title">Detalhes do pagamento</span>
                    <s.DivInput>
                        <span>Nome</span>
                        <input
                            type="text"
                            maxLength={20}
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </s.DivInput>
                    <s.DivInput>
                        <span>Número</span>
                        <InputMask
                            maskChar={null}
                            mask={"9999  9999  9999  9999"}
                            placeholder={"0000  0000  0000  0000"}
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                        />
                    </s.DivInput>
                    <s.DivValidCvc>
                        <s.DivSelect>
                            <s.DivInput>
                                <span>Mês</span>
                                <Select
                                    placeholder="00"
                                    styles={s.stylesSelect}
                                    options={optionsMonth}
                                    onChange={(e) => setMonthValid(e?.value)}
                                />
                            </s.DivInput>
                            <s.DivInput>
                                <span>Ano</span>
                                <Select
                                    placeholder="00"
                                    styles={s.stylesSelect}
                                    options={optionsYears}
                                    onChange={(e) => setYearsValid(e?.value)}
                                />
                            </s.DivInput>
                        </s.DivSelect>
                        <s.DivInput
                            style={{
                                width: "42%",
                                height: "60px",
                                justifyContent: "space-between",
                            }}
                            ref={inputCvv}
                        >
                            <span>CVV</span>
                            <input
                                style={{
                                    height: "62px",
                                }}
                                type="text"
                                maxLength={3}
                                onChange={(e) => setCvv(e.target.value)}
                                value={cvv}
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                            />
                        </s.DivInput>
                    </s.DivValidCvc>
                    <s.DivButton>
                        <button type="submit">Pagar</button>
                    </s.DivButton>
                </s.Form>
            </s.BoxContent>
        </s.Container>
    );
};
