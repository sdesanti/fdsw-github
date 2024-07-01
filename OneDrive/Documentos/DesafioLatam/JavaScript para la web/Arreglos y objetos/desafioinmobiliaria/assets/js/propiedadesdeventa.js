const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5.0,
    smoke: false,
    pets: false,
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con linda vista.',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1.2,
    smoke: true,
    pets: true,
    }, 

    {
    nombre: 'Penthouse de lujo con vista panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4.500,
    smoke: false,
    pets: true,
    }, 

    {
    nombre: 'Acogedores departamentos',
    src: 'https://http2.mlstatic.com/D_NQ_NP_901410-MLC76971527123_062024-O.webp',
    descripcion: 'Acogedores departamentos en tranquila zona.',
    ubicacion: '348 Line Boulevard, Miami, FL 78459',
    habitaciones: 2,
    baños: 2,
    costo: 3.0,
    smoke: true,
    pets: false,
    },
    
    {
    nombre: 'Céntrico espacio propio',
    src: 'https://http2.mlstatic.com/D_NQ_NP_935793-MLC54203372827_032023-O.webp',
    descripcion: 'Especialmente diseñado para profesional.',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 1,
    baños: 1,
    costo: 1,
    smoke: false,
    pets: false,
    }, 
    
    {
    nombre: 'San Miguel te espera',
    src: 'https://http2.mlstatic.com/D_NQ_NP_612520-MLC76820567011_062024-O.webp',
    descripcion: 'Diseñado para albergar familias.',
    ubicacion: 'San Miguel 569, OH 87385',
    habitaciones: 3,
    baños: 2,
    costo: 2.2,
    smoke: true,
    pets: true,
    }, 
    ];

    const ventaSection = document.querySelector("#venta");
  
    for (let venta of propiedades_venta) {
      const HTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
              <h5 class="card-title">${venta.nombre}</h5>
              <p class="card-text">${venta.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones</p>
              <p><i class="fas fa-bath"></i> ${venta.baños} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
              <p class="text-${venta.smoke ? "success" : "danger"}">
                <i class="fas fa-smoking${venta.smoke ? "" : "-ban"}"></i> ${venta.smoke ? "Permitido fumar" : "No se permite fumar"}
              </p>
              <p class="text-${venta.pets ? "success" : "danger"}">
                <i class="fas fa${venta.pets ? "-paw" : "-ban"}"></i> ${venta.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
            </div>
          </div>
        </div>
      `;
      ventaSection.innerHTML += HTML;
    }
    