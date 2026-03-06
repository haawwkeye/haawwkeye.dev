//import { NodePackageImporter } from 'sass-embedded';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/global.scss';` // Or use @use
            }
        }
    }
    //css: {
    //    preprocessorOptions: {
    //        scss: {
    //            //@ts-expect-error /shrug
    //            importer: new NodePackageImporter()
    //            //importer: new NodePackageImporter()
    //        }
    //    }
    //}
});
