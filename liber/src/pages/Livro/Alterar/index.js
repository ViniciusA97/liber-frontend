import {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import Upload from '../../../components/Dropzone'
import {Cadastro, Formulario, Input, Textarea} from './styled'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import api from '../../../utils/api'
import NotFoundPage from "../../NotFoundPage";

function AlterarLivro() {

    let { id } = useParams();
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasData, setHasData] = useState(false);

    const [titulo, setTitulo] = useState("Titulo");
    const [autor, setAutor] = useState("Autor");
    const [genero, setGenero] = useState("Genero");
    const [paginas, setPaginas] = useState("Paginas");
    const [ano, setAno] = useState("Ano");
    const [edicao, setEdicao] = useState("Edicao");
    const [editora, setEditora] = useState("Editora");
    const [isbn, setIsbn] = useState("ISBN");
    const [sinopse, setSinopse] = useState("Sinopse");


    function submitFile(files){
        setFile(files[0]);
        setPreview(URL.createObjectURL(files[0]));
    }

    const { register, handleSubmit, watch, errors, setValue , getValues } = useForm();

    const onSubmit = data =>{
        console.log(data)
        var config = {
            method: 'put',
            url: '/livro/edit/'+id,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        api(config)
            .then(function (response) {
                console.log(JSON.stringify(response.status));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    async function get(){
        var config = {
            method: 'get',
            url: '/livro/'+id,
            headers: { }
        };

        api(config)
            .then(function (response) {
                var data = response.data;
                console.log(response);
                if(response.status != 200){
                    console.log("all false")
                    setLoading(true)
                    setHasData(false)
                    return;
                }
                setTitulo(data.titulo? data.titulo: "Titulo")
                setAutor( data.autor? data.autor: "Autor")
                setGenero( data.genero? data.genero : "Genero")
                setPaginas( data.paginas? data.paginas : paginas)
                setAno( data.ano? data.ano: "Ano")
                setEdicao( data.edicao? data.edicao: "Edicao")
                setEditora( data.editora? data.editora: "Editora")
                setIsbn(data.isbn ? data.isbn : "ISBN")
                setSinopse(data.sinopse? data.sinopse: "Sinopse")
                setLoading(false);
                setHasData(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if(loading){
            get()
        }
    },[]);

    return (
        <div>
        {
            (!loading && hasData)?
            (
                <div>
                <Cadastro>

                    <Formulario>
                        <h2> Alterar livro </h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Upload  onUpload={submitFile} file={file} preview={preview}  />
                            <div className="box-form">
                                <Input name="titulo"
                                       defaultValue=""
                                       className="w-100"
                                       placeholder={titulo}
                                       ref={register({ required: true })}
                                />

                                <Input name="autor"
                                       defaultValue=""
                                       className="w-50"
                                       placeholder={autor}
                                       ref={register({ required: true })} />

                                <Input name="genero"
                                       defaultValue=""
                                       className="w-50"
                                       placeholder={genero}
                                       ref={register({ required: true })} />

                                <Input name="paginas"
                                       defaultValue=""
                                       className="w-33"
                                       placeholder={paginas}
                                       ref={register({ required: true })} />


                                <Input name="ano"
                                       defaultValue=""
                                       className="w-33"
                                       placeholder={ano}
                                       ref={register({ required: true })} />

                                <Input name="edicao"
                                       defaultValue=""
                                       className="w-33"
                                       placeholder={edicao}
                                       ref={register({ required: true })} />

                                <Input name="editora"
                                       defaultValue=""
                                       className="w-50"
                                       placeholder={editora}
                                       ref={register({ required: true })} />

                                <Input name="ISBN"
                                       defaultValue=""
                                       className="w-50"
                                       placeholder={isbn}
                                       ref={register({ required: true })} />

                                {/* include validation with required or other standard HTML validation rules */}
                                {/* <Input name="exampleRequired" ref={register({ required: true })} /> */}
                                {/* errors will return when field validation fails  */}
                                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                            </div>
                            <Textarea name="sinopse"
                                      defaultValue=""
                                      placeholder={sinopse}
                                      rows={12}
                                      cols={5}
                                      ref={register({ required: true })} />

                            <div className="box-btn">
                                <button type="submit" className="btn-enviar"> Enviar </button>
                                <Link to={"/livro/deletar/"+id}>
                                    <button>Deletar</button>
                                </Link>
                                <button type=""> Voltar </button>
                            </div>
                        </form>
                    </Formulario>

                </Cadastro>
            </div>
            ) :
            <NotFoundPage/>

        }
        </div>


    );
}

export default AlterarLivro;