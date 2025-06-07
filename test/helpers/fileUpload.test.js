// import { fileUpload } from "../../src/helpers";
import { fileUpload } from "../../src/helpers/fileUpload";
import { readFileSync } from 'fs';
import path from 'path';

describe('Pruebas en fileUpload', () => {
  
    test('debe subir el archivo correctamente a cloudinary', async() => {

        /** SUBIDA A PARTIR DE UNA URL */
        // // Nota algunas imagenes marcaran error cross origin por los permisos
        // const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        // const resp = await fetch( imageUrl );
        // const blob = await resp.blob(); // Obtenemos el blob
        // const file = new File([blob], 'foto.jpg'); // Creamos un File con el blob

        
        /** SUBIDA A PARTIR DE UN ARCHIVO LOCAL AL TEST*/
        const filePath = path.join(__dirname, '../assets/molino_00.jpg');
        const fileBuffer = readFileSync(filePath);
        const file = new File([fileBuffer], 'foto.jpg', { type: 'image/jpeg' });


        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

    });
});
