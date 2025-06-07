import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";
import { readFileSync } from 'fs';
import path from 'path';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

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

        /** BORRAR IMAGEN DE CLOUDINARY */
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
        // console.log(url);
        // console.log(imageId);
        const resp = await cloudinary.api.delete_resources([imageId]);
        // console.log(resp);
        expect(resp).toBeDefined();
        expect(resp.deleted).toHaveProperty(imageId, 'deleted');
        expect(resp.deleted_counts).toHaveProperty(imageId);
        expect(resp.deleted_counts[imageId].original).toBe(1);
        expect(resp.partial).toBe(false);

        // Verificar que ya no existe
        try {
            await cloudinary.api.resource(imageId);
            throw new Error('La imagen aún existe en Cloudinary');
        } catch (error) {
            // console.log('Cloudinary error:', error);
            expect(error).toBeDefined();
            expect(error.error.message).toMatch(/Resource not found/);
            expect(error.error.http_code).toBe(404);
        }

    });

    test('debe retornar un error', async() => {
        try {
            const file = new File([], 'foto.jpg'); // un null de objeto {}
            await fileUpload(file);
            // Si no lanza, falla el test
            throw new Error('fileUpload no lanzó un error');
        } catch (error) {
            // normalize es para normalizar el string y quitar accentos
            // expect(error.message.normalize()).toBe('No tenemos ningún archivo a subir'.normalize()); //si mandamos un null
            expect(error.message.normalize()).toBe('No se pudo subir imagen'.normalize());
        }
    });


});
