import styled from "styled-components";

export const ContactFormContainer=styled.div`
/*    width: 100%;
    max-width: 650px;
    margin: 0 auto;*/

    .contact_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;

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

        

        .input_container {
            width: 100%;
            position: relative;

            .error_field{
                font-family: "Rubik";
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                color: ${props=>props.theme.colors.primaryText};
                position: absolute;
                bottom: 0%;
                transform: translateY(calc(100% + 5px));
            }
            input, textarea {
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

                &:focus {
                    color: ${props => props.theme.colors.primaryText};
                }
            }

            textarea {
                height: 150px;
                padding: 15px 10px;
                resize: none;
            }

            &.error {
                input, textarea {
                    border: 1px solid red;
                }
            }
        }
    }
`