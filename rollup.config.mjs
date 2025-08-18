import fs from 'fs';
import { terser } from "rollup-terser";

const MODULE = JSON.parse(fs.readFileSync(new URL('./module.json', import.meta.url)));

export default {
        input: `.${MODULE.esmodules[0]}`,
        output: {
                file: `./scripts/bundle.min.mjs`,
                format: 'es',
                compact: true
        },
        plugins: [
        terser()
    ]
  };
