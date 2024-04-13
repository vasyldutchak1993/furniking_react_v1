import styled from "styled-components";

export const LoginFormStyled=styled.div`
    margin: 30px auto;
    max-width: 400px;
    background: #F7F8FA;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 2px rgba(85,85,85,1);

    .sign_up_form {
        width: inherit;
        display: flex;
        row-gap: 30px;
        flex-direction: column;
        padding: 25px 15px;


        .input_container {
            width: 100%;
            position: relative;

            .error_field {
                font-family: "Rubik";
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                color: ${props => props.theme.colors.primaryText};
                position: absolute;
                bottom: 0%;
                transform: translateY(calc(100% + 5px));
            }

            input {
                width: inherit;
                font-family: "Rubik";
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                color: rgba(176, 176, 176, 1);
                padding: 0 10px;
                height: 46px;
                border-radius: 5px;
                border: 2px solid rgba(122, 199, 81, 1);
                overflow: hidden;
                transition: all .3s;

                &:focus, &:active {
                    color: ${props => props.theme.colors.primaryText};
                    border: 2px solid rgb(81, 136, 199);
                    outline: none;
                }
            }

            .error_field {


            }

            .button_container {
                .submit_form_btn {
                    background: ${props => props.theme.colors.green};
                    color: ${props => props.theme.colors.primaryText};
                    font-weight: 600;
                    padding: 12px 20px;
                    display: flex;
                    justify-items: center;
                    align-items: center;
                    column-gap: 5px;
                    border: none;
                    border-radius: 5px;
                    transition: all .3s;

                    &:hover {
                        cursor: pointer;
                        box-shadow: 0 0 5px 1px green;
                    }

                    &:active {
                        box-shadow: 0 0 1px 1px green;
                    }
                }
            }
        }

        .button_container {
            .submit_form_btn {
                background: ${props => props.theme.colors.green};
                color: ${props => props.theme.colors.primaryText};
                font-weight: 600;
                padding: 12px 20px;
                display: flex;
                justify-items: center;
                align-items: center;
                column-gap: 5px;
                border: none;
                border-radius: 5px;
                transition: all .3s;

                &:hover {
                    cursor: pointer;
                    box-shadow: 0 0 5px 1px green;
                }

                &:active {
                    box-shadow: 0 0 1px 1px green;
                }
            }
        }
    }
`