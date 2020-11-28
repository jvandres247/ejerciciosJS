//Callbacks
const getUsuarioById = (id, callback) => {
    const usuario ={
        nombre: 'fernando',
        id
    }
    callback(null, usuario);
};

getUsuarioById( 1, (err,user)=>{
console.log('usuario de base de datos', user)
});

