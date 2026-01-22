module.exports = {
  apps: [
    {
      name: 'medimoa',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000 -H 0.0.0.0',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
