import styled, { CSSProperties } from "styled-components";

export const stylesSelect: any = {
    menu: (styles: CSSProperties) => ({
        ...styles,
        width: "100%",
        overflow: "hidden",
    }),
    container: (styles: CSSProperties, state: any) => ({
        ...styles,
        width: "100px",
        borderBottom: state.isFocused
            ? "2px solid var(--secondary)"
            : "2px solid #a1a1a159;",
    }),
    indicatorSeparator: (styles: CSSProperties) => ({
        ...styles,
        display: "none",
    }),
    control: (styles: CSSProperties) => ({
        ...styles,
        border: "none",
        boxShadow: "0",
        height: "26px",
        background: "transparent",

        "&:hover": {
            border: "none",
        },
    }),
    singleValue: (styles: CSSProperties) => ({
        ...styles,
        color: `${(props: any) => props.theme.colors.text}`,
    }),
    option: (styles: CSSProperties, state: any) => ({
        ...styles,
        background:
            state.isFocused || state.isSelected ? "var(--secondary)" : "",
        color: "#111",

        ":active": {
            background: "var(--secondary)",
        },
    }),
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${(props) => props.theme.colors.background};
    box-shadow: 0 0 10px #dfdfdf;
    color: ${(props) => props.theme.colors.text};
`;

export const BoxContent = styled.div`
    width: 55%;
    height: 65%;
    background: ${(props) => props.theme.colors.background_box};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const Switch = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 0rem;
    width: 5rem;

    input {
        display: none;
    }

    label {
        background-color: #202529;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 22px;
        width: 45px;
        transform: scale(1.5);
        transition: 0.3s linear;

        .ball {
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
            height: 18px;
            width: 18px;
            transform: translateX(0px);
            transition: transform 0.2s linear;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        }

        .moon {
            color: #bdbdbd;
        }

        .sun {
            color: #e3ce13;
        }
    }

    input[type="checkbox"]:checked + label .ball {
        transform: translateX(23px);
        background: #32383d;
    }

    input[type="checkbox"]:checked + label {
        background-color: #f5f5f5;
    }
`;

export const DivCard = styled.div`
    background-color: var(--primary);
    width: 40%;
    border-radius: 10px;
    position: relative;
    cursor: default;
`;

export const FlipContainer = styled.div`
    perspective: 1000px;
    width: 380px;
    height: 230px;
    position: absolute;
    top: 12rem;
    right: -5rem;

    &:hover .flipper {
        transform: rotateY(180deg);
    }

    & #active {
        transform: rotateY(180deg);
    }
`;

export const Flip = styled.div`
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;

    .flipFront,
    .flipBack {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        box-shadow: 0 0 10px 0px #74747442;
        position: absolute;
        backface-visibility: hidden;
    }
`;

export const CreditCardFront = styled.div`
    padding: 36px 32px 30px;
    font-weight: 700;
    color: #fff;

    input {
        background: transparent;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;

        span:nth-child(1) {
            font-size: 18px;
            text-transform: capitalize;
        }
    }
`;

export const CreditCardBack = styled.div`
    transform: rotateY(180deg);
    padding-top: 1rem;

    .active:focus {
        transform: rotateY(180deg);
    }

    div:nth-child(1) {
        background-color: #c0c0c0;
        width: 100%;
        height: 3rem;
        margin-bottom: 0.5rem;
    }

    div:nth-child(2) {
        text-align: end;
        padding: 0.3rem 1rem;
        margin: 0 1rem;
        background: #fff;
    }

    div:nth-child(3) {
        margin-top: 3rem;
        margin-left: 1rem;

        svg {
            height: 4rem;
            width: 4rem;
        }
    }
`;

export const NumberCard = styled.span`
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    color: #fff;
    display: block;
    font-weight: 400;

    &::-webkit-input-placeholder {
        color: #fff;
    }
`;

export const Form = styled.form`
    padding: 4rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    .title {
        font-weight: 400;
        font-size: 24px;
    }
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        color: #a1a1a1;
    }

    input {
        color: ${(props) => props.theme.colors.text};
        text-transform: capitalize;
        font-size: 18px;
        border-bottom: 2px solid #a1a1a159;
        padding-bottom: 0.2rem;
        background: transparent;
    }

    &:focus-within {
        transition: all 0.5s ease;
        span {
            color: var(--secondary);
        }

        input {
            border-bottom: 2px solid var(--secondary);
        }
    }
`;

export const DivSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
`;

export const DivValidCvc = styled.div`
    display: flex;
    align-items: center;
`;

export const DivButton = styled.div`
    width: 100%;
    text-align: center;

    button {
        text-transform: uppercase;
        padding: 1rem;
        width: 50%;
        text-align: center;
        border-radius: 10px;
        color: #fff;
        background: var(--primary);
        transition: all 0.3s ease;
        cursor: pointer;

        :hover {
            transform: scale(1.1);
        }
    }
`;
