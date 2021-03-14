
import {useState} from 'react'
import { useForm } from "react-hook-form";
import Upload from '../../../components/Dropzone'
import {Cadastro, Formulario, Input, Textarea} from './styled'

import api from '../../../utils/api'

function AlterarLivro() {

    const [file, setFile] = useState();
    const [preview, setPreview] = useState(null);
    
    function submitFile(files){
        setFile(files[0]);
        setPreview(URL.createObjectURL(files[0]));
    }

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data =>{
       console.log(data)
      var config = {
        method: 'put',
        url: '/livro',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      api(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }
  
    return (
      <Cadastro>
 
        <Formulario>
          <h2> Alterar livro </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Upload  onUpload={submitFile} file={file} preview={preview}  />
            <div className="box-form">
                <Input name="titulo" 
                       defaultValue="" 
                       className="w-100"
                       placeholder="Titulo" 
                       ref={register({ required: true })} />
                
                <Input name="autor" 
                       defaultValue="" 
                       className="w-50"
                       placeholder="Autor" 
                       ref={register({ required: true })} />
                
                <Input name="genero" 
                       defaultValue="" 
                       className="w-50"
                       placeholder="Genero" 
                       ref={register({ required: true })} />

                <Input name="paginas" 
                       defaultValue=""
                       className="w-33" 
                       placeholder="Paginas" 
                       ref={register({ required: true })} />

              
                <Input name="ano" 
                       defaultValue="" 
                       className="w-33"
                       placeholder="Ano" 
                       ref={register({ required: true })} />
               
                <Input name="edicao" 
                       defaultValue="" 
                       className="w-33"
                       placeholder="Edição" 
                       ref={register({ required: true })} />
                
                <Input name="editora" 
                       defaultValue="" 
                       className="w-50"
                       placeholder="Editora" 
                       ref={register({ required: true })} />

                <Input name="ISBN" 
                       defaultValue="" 
                       className="w-50"
                       placeholder="ISBN" 
                       ref={register({ required: true })} />
                
                {/* include validation with required or other standard HTML validation rules */}
                {/* <Input name="exampleRequired" ref={register({ required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
            </div>
            <Textarea name="sinopse" 
                       defaultValue="" 
                       placeholder="Sinopse" 
                       rows={12}
                       cols={5}              
                       ref={register({ required: true })} />
          
            <div className="box-btn">
              <button type="submit" className="btn-enviar"> Enviar </button>
              <button type=""> Voltar </button>
            </div>
        </form>
        </Formulario>

      </Cadastro>
    );
  }
  
  export default AlterarLivro;