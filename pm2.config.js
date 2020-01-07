module.exports = {
  apps: [
    {
      name: 'Socket Game Demo Server',
      script: './bin/www',
      node_args: '-r dotenv/config',
    }
  ]
}