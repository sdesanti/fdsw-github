const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      baños: 2,
      costo: 2.000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      baños: 3,
      costo: 2.500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      baños: 2,
      costo: 2.200,
      smoke: false,
      pets: false
    },
    {
        nombre: 'Arriendo a profesional',
        src: 'https://http2.mlstatic.com/D_NQ_NP_790749-MLC47657021869_092021-O.webp',
        descripcion: 'Especial para profesional joven.',
        ubicacion: 'Serrano 897, Santiago Centro',
        habitaciones: 1,
        baños: 1,
        costo: 200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Amplio espacio en lugar acomodado',
        src: 'https://http2.mlstatic.com/D_NQ_NP_687697-MLC76945720926_062024-O.webp',
        descripcion: 'Amplio y cómodo lugar para ti y tu familia',
        ubicacion: 'Av. Vitacura 4304, Vitacura',
        habitaciones: 3,
        baños: 3,
        costo: 3.000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'En céntrico sector de Ñuñoa',
        src: 'https://http2.mlstatic.com/D_NQ_NP_799648-MLC73554668450_122023-O.webp',
        descripcion: 'Práctico lugar para persona soltera',
        ubicacion: 'Zañartu 450, Ñuñoa',
        habitaciones: 2,
        baños: 1,
        costo: 1.500,
        smoke: true,
        pets: false
      }
  ];
  
  const alquilerSection = document.querySelector("#alquiler");
  
  for (let alquiler of propiedades_alquiler) {
    const HTML = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${alquiler.src}" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${alquiler.nombre}</h5>
            <p class="card-text">${alquiler.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones</p>
            <p><i class="fas fa-bath"></i> ${alquiler.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
            <p class="text-${alquiler.smoke ? "success" : "danger"}">
              <i class="fas fa-smoking${alquiler.smoke ? "" : "-ban"}"></i> ${alquiler.smoke ? "Permitido fumar" : "No se permite fumar"}
            </p>
            <p class="text-${alquiler.pets ? "success" : "danger"}">
              <i class="fas fa${alquiler.pets ? "-paw" : "-ban"}"></i> ${alquiler.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
          </div>
        </div>
      </div>
    `;
    alquilerSection.innerHTML += HTML;
  }