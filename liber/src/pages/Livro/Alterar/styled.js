import styled, {css} from "styled-components";


export const Cadastro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 80px 0px;
    
`

export const Formulario = styled.div`
    position: relative;
    width: 70%;
    margin: 0 15%;
    border-top: 5px solid #135751;
    border-bottom: 5px solid #135751;
    padding: 0 20px;
    border-radius: 8px;

    h2{
        position: relative;
        text-align: center;
        font-weight: semi-bold;
        font-family: 'Dancing Script', cursive;
        font-size: 32px;
        color: #135751;
    }
    form{
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;

        .box-form{
            width: calc(100% - 200px);
            margin-left: 10px;
        }

        .w-100{
            width: calc(100% - 10px);
            margin-left: 5px;
        }

        .w-50{
            width: calc(50% - 10px);
            margin-left: 5px;
        }
        
        .w-33{
            width: calc(33.3% - 10px);
            margin-left: 5px;
        }
        @media(max-width: 991px){
            .box-form{
                width: calc(100% - 170px);
            }
        }
        @media(max-width: 767px){
            .box-form{
                width: 100%;
                margin-left: 0;
            }

        }
    }


    .box-btn{
        display: flex;
        width: 100%;
        margin: 30px 0;
        justify-content: flex-end;

        button{
            position: relative;
            width: 30%;
            height: 35px;
            border-radius: 4px;
            border: none;
        }

        .btn-enviar{
            background-color: #135751;
            color: #fff;
            margin-right: 15px;
        } 
    }

    @media(max-width: 767px){
            width: 90%;
            margin: 0 5%;
    }
`

export const Input = styled.input`
    height: 40px;
    border: none;
    border-bottom: 1px solid #135751;
    margin-bottom: 15px;

`

export const Textarea = styled.textarea`
    height: 250px;
    margin-top: 30px;
    width: 100%;
    border: 1px solid #135751;
    resize: none;

`
