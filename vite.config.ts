import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
    server: {
      port: 3000
    },
    test: {
        exclude: [...configDefaults.exclude, 'tests/*'],
    },
})
