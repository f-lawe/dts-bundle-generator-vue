import { execSync } from 'child_process';
import path from 'path';

import type { ResolvedConfig } from 'vite';

interface PluginConfig {
  outFile: string;
}

const vueTypescript = (config: PluginConfig) => {
  let viteConfig: ResolvedConfig;

  return {
    name: 'vue-typescript',
    configResolved: (resolvedConfig: ResolvedConfig) => {
      viteConfig = resolvedConfig;
    },
    closeBundle: async () => {
      const outFile = path.resolve(viteConfig.build.outDir, config.outFile);
      const cmd = `npx vue-tsc --declaration --emitDeclarationOnly --outfile ${outFile}`;
      execSync(cmd);
    }
  };
};

export default vueTypescript;
