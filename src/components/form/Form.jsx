import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../../services/firebaseConfig';
import { Link } from 'react-router-dom';


const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('mexico');
    const [telefono, setTelefono] = useState("");
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');

    const [orderId, setOrderId] = useState('');

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();

        if(email1 === email2){
            const objOrden = {
                buyer: {
                    name,
                    lastName,
                    country,
                    telefono,
                    email1,
                },
                items: cart,
                total: totalCarrito,
                date: serverTimestamp(),
            };
    
            const orderCollection = collection(db, 'orders');
    
            addDoc(orderCollection, objOrden)
                .then((res) => {
                    setOrderId(res.id);
                    deleteAll();
                })
                .catch((error) => {
                    console.log('Tuvimos un error procesando tu compra, intenta de nuevo.', error);
                });
        }
        else{
            alert("Validación de email incorrecta, verifica que sea correcto.")
        }

    };

    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    const handleCountry= (e) => setCountry(e.target.value);
    
    const handleTelefono= (e) => setTelefono(e.target.value);

    const handleEmail1= (e) => setEmail1(e.target.value);

    const handleEmail2= (e) => setEmail2(e.target.value);

    if (orderId) {
        return (
            <div className='text-center'>
            <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
            <Link to="/">Regresar al Menú Principal</Link>
            </div>
        );
    }

    return (
        <section className="row sectionFinalCompra">
            <div className="col-lg-6 col-md-8 col-sm-12 div_Compra_form align-items-center mx-auto">
            <div className='text-center'>
                <h1>¡Finaliza tu Compra!</h1>
            </div>
            
            <form className="col-lg-6 col-md-8 col-sm-12 container_form" action="" onSubmit={enviarDatos}>
            
            <div className="form-group">
                <label for="Nombre">Nombre</label>
                <input type="text" id="Nombre" name="Nombre" placeholder="Escribe tu nombre" className="form-control" onChange={handleName} value={name} />
            </div>

            <div className="form-group">
                <label for="Apellido">Apellido</label>
                <input type="text" id="Apellido" name="Apellido" placeholder="Escribe tu apellido" className="form-control" onChange={handleLastName} value={lastName} />
            </div>

            
            <div className="form-group">
                <label for="Telefono">Teléfono</label>
                <input type="text" id="Telefono" name="Telefono" placeholder="Escribe tu número telefónico" className="form-control" onChange={handleTelefono} value={telefono} />
            </div>


            <div className="form-group">
                <label for="Pais">País</label>
                <select id="Pais" name="Pais" className="form-control" onChange={handleCountry} value={country}>
                <option value="mexico">MX</option>
                <option value="argentina">ARG</option>
                <option value="paraguay">PAR</option>
                <option value="otro">Otro</option>
                </select>
            </div>

            <div className="form-group">
                <label for="email1">Correo Electrónico</label>
                <input type="email" className="form-control" id="email1" placeholder="Escribe tu email.." onChange={handleEmail1} value={email1}/>
                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu email con nadie más.</small>
            </div>

            <div className="form-group">
                <label for="email2">Correo Electrónico Validación</label>
                <input type="email" className="form-control" id="email2" placeholder="Re-escribe tu email" onChange={handleEmail2} value={email2}/>
            </div>
                <button className="btn btn-info">Realizar Compra</button>
            </form>
            </div>

    </section>
    );
};

export default Form;