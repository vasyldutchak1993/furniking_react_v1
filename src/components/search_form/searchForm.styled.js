import styled from "styled-components";

export const SearchFormStyled=styled.div`
    
    width: 100%;
    background: blue;
    height: 46px;
    border-radius: 5px;
    border: 2px solid rgba(122, 199, 81, 1);
    overflow: hidden;
    .search_form {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        .w-100{
            flex: 1;
            input{
                width: 100%;
            }
        }
        .border_right{
            border-right: 1.5px solid rgba(227, 227, 227, 0.78);
        }
        .input_container{
            height: 100%;
            input,select,button{
                height: inherit;
                border: none;
                outline: none;
                box-shadow: none;
            }

            input[name='searchQuery']{
                font-family: "Rubik";
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                color: rgba(176, 176, 176, 1);
                padding: 0 10px;
                &:focus{
                    color: ${props=>props.theme.colors.primaryText};
                }
            }
            
            .categories{
                max-width: 150px;
                min-width: 150px;
            }
            .btn_search_form{
                width: 53px;
                background: ${props=>props.theme.colors.green};
                color: ${props=>props.theme.colors.white};
                font-size: 16px;
            }
        }
        
    }
`