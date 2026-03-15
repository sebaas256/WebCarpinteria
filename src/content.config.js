import { defineCollection, z } from 'astro:content';
//importamos glob para cargar los archivos md de la carpeta proyectos
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
    //loader para cargar los archivos md de la carpeta proyectos, con el patrón **/*.md y base -/src/content/proyectos
    loader: glob({ pattern: "**/*.md", base: new URL("../src/content/proyectos", import.meta.url) }),
    schema: ({image}) => z.object({
    title: z.string(),
    material: z.string(),
    image: image(),
    alt: z.string(),    
    }),
});

export const collections = {proyectos};